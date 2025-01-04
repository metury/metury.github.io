// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="index.html">Welcome page</a></li><li class="chapter-item affix "><li class="part-title">Main pages</li><li class="chapter-item "><a href="about.html"><strong aria-hidden="true">1.</strong> About</a></li><li class="chapter-item "><a href="mff.html"><strong aria-hidden="true">2.</strong> Matfyz</a></li><li class="chapter-item "><a href="projects.html"><strong aria-hidden="true">3.</strong> Projects</a></li><li class="chapter-item affix "><li class="part-title">Programming exercises</li><li class="chapter-item "><a href="adventofcode.html"><strong aria-hidden="true">4.</strong> Advent of code</a></li><li class="chapter-item "><a href="sandbox.html"><strong aria-hidden="true">5.</strong> Sandbox</a></li><li class="chapter-item "><a href="exercises.html"><strong aria-hidden="true">6.</strong> Exercises</a></li><li class="chapter-item affix "><li class="part-title">Tenerife</li><li class="chapter-item "><a href="tenerife.html"><strong aria-hidden="true">7.</strong> Tenerife</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/travel.html"><strong aria-hidden="true">7.1.</strong> Cesta</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/items.html"><strong aria-hidden="true">7.1.1.</strong> Věci s sebou</a></li><li class="chapter-item "><a href="tenerife/flight.html"><strong aria-hidden="true">7.1.2.</strong> Let</a></li><li class="chapter-item "><a href="tenerife/cars-buses.html"><strong aria-hidden="true">7.1.3.</strong> Pohyb po ostrově</a></li></ol></li><li class="chapter-item "><a href="tenerife/tracks-places.html"><strong aria-hidden="true">7.2.</strong> Trasy a místa</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/nature.html"><strong aria-hidden="true">7.2.1.</strong> Příroda</a></li><li class="chapter-item "><a href="tenerife/towns.html"><strong aria-hidden="true">7.2.2.</strong> Města</a></li><li class="chapter-item "><a href="tenerife/playas.html"><strong aria-hidden="true">7.2.3.</strong> Pláže a bazény</a></li><li class="chapter-item "><a href="tenerife/extra.html"><strong aria-hidden="true">7.2.4.</strong> Další aktivity</a></li></ol></li><li class="chapter-item "><a href="tenerife/weather.html"><strong aria-hidden="true">7.3.</strong> Počasí</a></li><li class="chapter-item "><a href="tenerife/surroundings.html"><strong aria-hidden="true">7.4.</strong> Okolí Costa del Silencio</a></li></ol></li><li class="chapter-item "><li class="part-title">Miscellaneous</li><li class="chapter-item "><a href="boot.html"><strong aria-hidden="true">8.</strong> Boot</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
