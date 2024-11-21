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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="index.html">Welcome page</a></li><li class="chapter-item affix "><li class="part-title">Main pages</li><li class="chapter-item "><a href="about.html"><strong aria-hidden="true">1.</strong> About</a></li><li class="chapter-item "><a href="mff.html"><strong aria-hidden="true">2.</strong> Matfyz</a></li><li class="chapter-item "><a href="projects.html"><strong aria-hidden="true">3.</strong> Projects</a></li><li class="chapter-item affix "><li class="part-title">Programming exercises</li><li class="chapter-item "><a href="programming.html"><strong aria-hidden="true">4.</strong> Sandbox</a></li><li class="chapter-item "><a href="exercises.html"><strong aria-hidden="true">5.</strong> Exercises</a></li><li class="chapter-item affix "><li class="part-title">Tenerife</li><li class="chapter-item "><a href="tenerife.html"><strong aria-hidden="true">6.</strong> Tenerife</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/travel.html"><strong aria-hidden="true">6.1.</strong> Cesta</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/items.html"><strong aria-hidden="true">6.1.1.</strong> Věci s sebou</a></li><li class="chapter-item "><a href="tenerife/flight.html"><strong aria-hidden="true">6.1.2.</strong> Let</a></li><li class="chapter-item "><a href="tenerife/cars-buses.html"><strong aria-hidden="true">6.1.3.</strong> Pohyb po ostrově</a></li></ol></li><li class="chapter-item "><a href="tenerife/tracks-places.html"><strong aria-hidden="true">6.2.</strong> Trasy a místa</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tenerife/nature.html"><strong aria-hidden="true">6.2.1.</strong> Příroda</a></li><li class="chapter-item "><a href="tenerife/towns.html"><strong aria-hidden="true">6.2.2.</strong> Města</a></li><li class="chapter-item "><a href="tenerife/playas.html"><strong aria-hidden="true">6.2.3.</strong> Pláže a bazény</a></li><li class="chapter-item "><a href="tenerife/extra.html"><strong aria-hidden="true">6.2.4.</strong> Další aktivity</a></li></ol></li><li class="chapter-item "><a href="tenerife/weather.html"><strong aria-hidden="true">6.3.</strong> Počasí</a></li><li class="chapter-item "><a href="tenerife/surroundings.html"><strong aria-hidden="true">6.4.</strong> Okolí Costa del Silencio</a></li></ol></li><li class="chapter-item "><li class="part-title">Miscellaneous</li><li class="chapter-item "><a href="boot.html"><strong aria-hidden="true">7.</strong> Boot</a></li><li class="chapter-item "><a href="dezinfo.html"><strong aria-hidden="true">8.</strong> (Dez)Informace</a></li><li class="chapter-item "><a href="movies.html"><strong aria-hidden="true">9.</strong> Movie list</a></li><li class="chapter-item "><a href="library.html"><strong aria-hidden="true">10.</strong> Books</a></li><li class="chapter-item affix "><li class="part-title">Advent of code</li><li class="chapter-item "><a href="adventofcode.html"><strong aria-hidden="true">11.</strong> Advent of code</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2023.html"><strong aria-hidden="true">11.1.</strong> Year 2023</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2023-25.html"><strong aria-hidden="true">11.1.1.</strong> Year 2023 day 25</a></li><li class="chapter-item "><a href="aoc/2023-24.html"><strong aria-hidden="true">11.1.2.</strong> Year 2023 day 24</a></li><li class="chapter-item "><a href="aoc/2023-23.html"><strong aria-hidden="true">11.1.3.</strong> Year 2023 day 23</a></li><li class="chapter-item "><a href="aoc/2023-22.html"><strong aria-hidden="true">11.1.4.</strong> Year 2023 day 22</a></li><li class="chapter-item "><a href="aoc/2023-21.html"><strong aria-hidden="true">11.1.5.</strong> Year 2023 day 21</a></li><li class="chapter-item "><a href="aoc/2023-19.html"><strong aria-hidden="true">11.1.6.</strong> Year 2023 day 19</a></li><li class="chapter-item "><a href="aoc/2023-18.html"><strong aria-hidden="true">11.1.7.</strong> Year 2023 day 18</a></li><li class="chapter-item "><a href="aoc/2023-17.html"><strong aria-hidden="true">11.1.8.</strong> Year 2023 day 17</a></li><li class="chapter-item "><a href="aoc/2023-16.html"><strong aria-hidden="true">11.1.9.</strong> Year 2023 day 16</a></li><li class="chapter-item "><a href="aoc/2023-15.html"><strong aria-hidden="true">11.1.10.</strong> Year 2023 day 15</a></li><li class="chapter-item "><a href="aoc/2023-14.html"><strong aria-hidden="true">11.1.11.</strong> Year 2023 day 14</a></li><li class="chapter-item "><a href="aoc/2023-13.html"><strong aria-hidden="true">11.1.12.</strong> Year 2023 day 13</a></li><li class="chapter-item "><a href="aoc/2023-12.html"><strong aria-hidden="true">11.1.13.</strong> Year 2023 day 12</a></li><li class="chapter-item "><a href="aoc/2023-11.html"><strong aria-hidden="true">11.1.14.</strong> Year 2023 day 11</a></li><li class="chapter-item "><a href="aoc/2023-9.html"><strong aria-hidden="true">11.1.15.</strong> Year 2023 day 9</a></li><li class="chapter-item "><a href="aoc/2023-8.html"><strong aria-hidden="true">11.1.16.</strong> Year 2023 day 8</a></li><li class="chapter-item "><a href="aoc/2023-7.html"><strong aria-hidden="true">11.1.17.</strong> Year 2023 day 7</a></li><li class="chapter-item "><a href="aoc/2023-6.html"><strong aria-hidden="true">11.1.18.</strong> Year 2023 day 6</a></li><li class="chapter-item "><a href="aoc/2023-5.html"><strong aria-hidden="true">11.1.19.</strong> Year 2023 day 5</a></li><li class="chapter-item "><a href="aoc/2023-4.html"><strong aria-hidden="true">11.1.20.</strong> Year 2023 day 4</a></li><li class="chapter-item "><a href="aoc/2023-3.html"><strong aria-hidden="true">11.1.21.</strong> Year 2023 day 3</a></li><li class="chapter-item "><a href="aoc/2023-2.html"><strong aria-hidden="true">11.1.22.</strong> Year 2023 day 2</a></li><li class="chapter-item "><a href="aoc/2023-1.html"><strong aria-hidden="true">11.1.23.</strong> Year 2023 day 1</a></li></ol></li><li class="chapter-item "><a href="aoc/2022.html"><strong aria-hidden="true">11.2.</strong> Year 2022</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2022-15.html"><strong aria-hidden="true">11.2.1.</strong> Year 2022 day 15</a></li><li class="chapter-item "><a href="aoc/2022-14.html"><strong aria-hidden="true">11.2.2.</strong> Year 2022 day 14</a></li><li class="chapter-item "><a href="aoc/2022-13.html"><strong aria-hidden="true">11.2.3.</strong> Year 2022 day 13</a></li><li class="chapter-item "><a href="aoc/2022-12.html"><strong aria-hidden="true">11.2.4.</strong> Year 2022 day 12</a></li><li class="chapter-item "><a href="aoc/2022-11.html"><strong aria-hidden="true">11.2.5.</strong> Year 2022 day 11</a></li><li class="chapter-item "><a href="aoc/2022-9.html"><strong aria-hidden="true">11.2.6.</strong> Year 2022 day 9</a></li><li class="chapter-item "><a href="aoc/2022-8.html"><strong aria-hidden="true">11.2.7.</strong> Year 2022 day 8</a></li><li class="chapter-item "><a href="aoc/2022-7.html"><strong aria-hidden="true">11.2.8.</strong> Year 2022 day 7</a></li><li class="chapter-item "><a href="aoc/2022-6.html"><strong aria-hidden="true">11.2.9.</strong> Year 2022 day 6</a></li><li class="chapter-item "><a href="aoc/2022-5.html"><strong aria-hidden="true">11.2.10.</strong> Year 2022 day 5</a></li><li class="chapter-item "><a href="aoc/2022-4.html"><strong aria-hidden="true">11.2.11.</strong> Year 2022 day 4</a></li><li class="chapter-item "><a href="aoc/2022-3.html"><strong aria-hidden="true">11.2.12.</strong> Year 2022 day 3</a></li><li class="chapter-item "><a href="aoc/2022-2.html"><strong aria-hidden="true">11.2.13.</strong> Year 2022 day 2</a></li><li class="chapter-item "><a href="aoc/2022-1.html"><strong aria-hidden="true">11.2.14.</strong> Year 2022 day 1</a></li></ol></li><li class="chapter-item "><a href="aoc/2021.html"><strong aria-hidden="true">11.3.</strong> Year 2021</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2021-14.html"><strong aria-hidden="true">11.3.1.</strong> Year 2021 day 14</a></li><li class="chapter-item "><a href="aoc/2021-11.html"><strong aria-hidden="true">11.3.2.</strong> Year 2021 day 11</a></li><li class="chapter-item "><a href="aoc/2021-8.html"><strong aria-hidden="true">11.3.3.</strong> Year 2021 day 8</a></li><li class="chapter-item "><a href="aoc/2021-7.html"><strong aria-hidden="true">11.3.4.</strong> Year 2021 day 7</a></li><li class="chapter-item "><a href="aoc/2021-6.html"><strong aria-hidden="true">11.3.5.</strong> Year 2021 day 6</a></li><li class="chapter-item "><a href="aoc/2021-5.html"><strong aria-hidden="true">11.3.6.</strong> Year 2021 day 5</a></li><li class="chapter-item "><a href="aoc/2021-4.html"><strong aria-hidden="true">11.3.7.</strong> Year 2021 day 4</a></li><li class="chapter-item "><a href="aoc/2021-3.html"><strong aria-hidden="true">11.3.8.</strong> Year 2021 day 3</a></li><li class="chapter-item "><a href="aoc/2021-2.html"><strong aria-hidden="true">11.3.9.</strong> Year 2021 day 2</a></li><li class="chapter-item "><a href="aoc/2021-1.html"><strong aria-hidden="true">11.3.10.</strong> Year 2021 day 1</a></li></ol></li><li class="chapter-item "><a href="aoc/2017.html"><strong aria-hidden="true">11.4.</strong> Year 2017</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2017-2.html"><strong aria-hidden="true">11.4.1.</strong> Year 2017 day 2</a></li><li class="chapter-item "><a href="aoc/2017-1.html"><strong aria-hidden="true">11.4.2.</strong> Year 2017 day 1</a></li></ol></li><li class="chapter-item "><a href="aoc/2016.html"><strong aria-hidden="true">11.5.</strong> Year 2016</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2016-4.html"><strong aria-hidden="true">11.5.1.</strong> Year 2016 day 4</a></li><li class="chapter-item "><a href="aoc/2016-3.html"><strong aria-hidden="true">11.5.2.</strong> Year 2016 day 3</a></li><li class="chapter-item "><a href="aoc/2016-2.html"><strong aria-hidden="true">11.5.3.</strong> Year 2016 day 2</a></li><li class="chapter-item "><a href="aoc/2016-1.html"><strong aria-hidden="true">11.5.4.</strong> Year 2016 day 1</a></li></ol></li><li class="chapter-item "><a href="aoc/2015.html"><strong aria-hidden="true">11.6.</strong> Year 2015</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="aoc/2015-7.html"><strong aria-hidden="true">11.6.1.</strong> Year 2015 day 7</a></li><li class="chapter-item "><a href="aoc/2015-6.html"><strong aria-hidden="true">11.6.2.</strong> Year 2015 day 6</a></li><li class="chapter-item "><a href="aoc/2015-5.html"><strong aria-hidden="true">11.6.3.</strong> Year 2015 day 5</a></li><li class="chapter-item "><a href="aoc/2015-4.html"><strong aria-hidden="true">11.6.4.</strong> Year 2015 day 4</a></li><li class="chapter-item "><a href="aoc/2015-3.html"><strong aria-hidden="true">11.6.5.</strong> Year 2015 day 3</a></li><li class="chapter-item "><a href="aoc/2015-2.html"><strong aria-hidden="true">11.6.6.</strong> Year 2015 day 2</a></li><li class="chapter-item "><a href="aoc/2015-1.html"><strong aria-hidden="true">11.6.7.</strong> Year 2015 day 1</a></li></ol></li></ol></li></ol>';
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
