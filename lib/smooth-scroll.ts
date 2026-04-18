export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId.replace('#', ''));
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - 80;

  // Check if browser supports smooth scroll
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    // Fallback for older browsers
    window.scrollTo(0, offsetPosition);
  }
}

export function initSmoothScroll() {
  // Remove any existing listeners first to avoid duplicates
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Clone the node to remove all event listeners
    const newAnchor = anchor.cloneNode(true) as HTMLAnchorElement;
    anchor.parentNode?.replaceChild(newAnchor, anchor);

    newAnchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href);
        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    });
  });
}
