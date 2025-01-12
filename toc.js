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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="about.html">About</a></li><li class="chapter-item affix "><li class="part-title">Matfyz</li><li class="chapter-item "><a href="mff.html"><strong aria-hidden="true">1.</strong> Matfyz</a></li><li class="chapter-item affix "><li class="part-title">Collections</li><li class="chapter-item "><div><strong aria-hidden="true">2.</strong> Movies</div></li><li class="chapter-item "><div><strong aria-hidden="true">3.</strong> Books</div></li><li class="chapter-item "><div><strong aria-hidden="true">4.</strong> Programming languanges</div></li><li class="chapter-item affix "><li class="part-title">Tenerife</li><li class="chapter-item "><a href="tenerife.html"><strong aria-hidden="true">5.</strong> Tenerife</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/travel.html"><strong aria-hidden="true">5.1.</strong> Cesta</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/items.html"><strong aria-hidden="true">5.1.1.</strong> Věci s sebou</a></li><li class="chapter-item "><a href="tenerife/flight.html"><strong aria-hidden="true">5.1.2.</strong> Let</a></li><li class="chapter-item "><a href="tenerife/cars-buses.html"><strong aria-hidden="true">5.1.3.</strong> Pohyb po ostrově</a></li></ol></li><li class="chapter-item "><a href="tenerife/tracks-places.html"><strong aria-hidden="true">5.2.</strong> Trasy a místa</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/nature.html"><strong aria-hidden="true">5.2.1.</strong> Příroda</a></li><li class="chapter-item "><a href="tenerife/towns.html"><strong aria-hidden="true">5.2.2.</strong> Města</a></li><li class="chapter-item "><a href="tenerife/playas.html"><strong aria-hidden="true">5.2.3.</strong> Pláže a bazény</a></li><li class="chapter-item "><a href="tenerife/extra.html"><strong aria-hidden="true">5.2.4.</strong> Další aktivity</a></li></ol></li><li class="chapter-item "><a href="tenerife/weather.html"><strong aria-hidden="true">5.3.</strong> Počasí</a></li><li class="chapter-item "><a href="tenerife/surroundings.html"><strong aria-hidden="true">5.4.</strong> Okolí Costa del Silencio</a></li></ol></li></ol>';
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
