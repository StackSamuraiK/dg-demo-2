import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log incoming data for debugging
    console.log('=== FORM SUBMISSION DEBUG ===');
    console.log('Raw body:', JSON.stringify(body, null, 2));
    console.log('Country value:', body.country);
    console.log('Country type:', typeof body.country);
    console.log('Country length:', body.country?.length);

    // Map form fields to SheetDB column names
    // Note: "Country " has a trailing space to match Google Sheet column name
    // Clean phone number: remove all non-digit chars, add + if needed
    let cleanPhone = (body.whatsapp || '').replace(/[^\d]/g, '');
    if (cleanPhone && !cleanPhone.startsWith('+')) {
      cleanPhone = '+' + cleanPhone;
    }

    const sheetData = {
      Name: body.name || '',
      Email: body.email || '',
      'Phone Number': cleanPhone || '',
      'Country ': body.country || '',
      'Service Required': body.service || '',
      Date: new Date().toISOString(),
    };

    // Log data being sent to SheetDB
    console.log('Sending to SheetDB:', JSON.stringify(sheetData, null, 2));
    console.log('============================');

    // Get SheetDB API URL from environment variable
    const sheetDbUrl = process.env.SHEETDB_API_URL || 'https://sheetdb.io/api/v1/sfvq567ganupu';

    // Send data to SheetDB
    const response = await fetch(sheetDbUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SheetDB error response:', errorText);
      throw new Error(`SheetDB error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('SheetDB success response:', data);

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('SheetDB API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit form'
      },
      { status: 500 }
    );
  }
}
