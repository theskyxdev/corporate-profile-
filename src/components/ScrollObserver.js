"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Select all animatable elements
    const getElements = () => {
      return document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    };

    let elements = getElements();

    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px", // Trigger slightly before element fully enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once animated, we can unobserve if we want a one-way animation
          // observer.unobserve(entry.target);
        } else {
          // If we want elements to animate out when scrolling away, uncomment:
          // entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    // Fallback for elements already in viewport at load
    setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          el.classList.add("active");
        }
      });
    }, 100);

    // Setup mutation observer to handle dynamically loaded content
    const mutationObserver = new MutationObserver(() => {
      const currentElements = getElements();
      currentElements.forEach((el) => {
        if (!el.classList.contains("active")) {
          observer.observe(el);
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes to bind to new page elements

  return null;
}
