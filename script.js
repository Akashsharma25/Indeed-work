      // Function to update active nav item and content area
      function updateNavContent(activeNavId, content) {
        document
          .querySelectorAll(".side-nav")
          .forEach((nav) => nav.classList.remove("active-nav"));
        const activeNav = document.getElementById(activeNavId);
        activeNav.classList.add("active-nav");
        document.getElementById("content-area").innerHTML = content;
      }

      // Event listeners for nav items
      document.getElementById("home-nav").addEventListener("click", () =>
        updateNavContent(
          "home-nav",
          `<div class="right-one">
                <div class="right-one-one rightOne-divs">
                  <h2>Device ID Connected</h2>
                  <select class="rightOne-select">
                    <option value="option1">MBS00007</option>
                  </select>
                </div>
                <div class="right-one-two rightOne-divs">
                  <h2>Temp:</h2>
                  <h1>37.5° C</h1>
                </div>
                <div class="right-one-three rightOne-divs">
                  <div
                    style="
                      width: 60%;
                      display: flex;
                      justify-content: space-between;
                    "
                  >
                    <input type="checkbox" />
                    <h1>Select</h1>
                  </div>
                  <div>
                    <i class="fa-regular fa-circle"></i>
                    <h2>White</h2>
                  </div>
                  <div>
                    <i class="fa-solid fa-play"></i>
                    <h2>Start</h2>
                  </div>
                  <div>
                    <i class="fa-solid fa-stop"></i>
                    <h2>Stop</h2>
                  </div>
                </div>
    
                <div class="right-one-four rightOne-divs">
                  <i class="fa-solid fa-gear"></i>
                  <h2 class="right-one-four-h2">Device Settings</h2>
                </div>
              </div>
              <div class="right-two">
                <section>
                  <div class="right-two-one right-two-divs">
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>01</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Take White</h1>
                        </span>
                        <span class="span-two"><h1>Start</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>02</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten-2">
                        03:34
                        <h2>25%</h2>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>03</h2>
                      <h1>
                        Stop?
                        <p style="font-size: 10px; margin-top: 2px">TSRT1425</p>
                      </h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Yes</h1>
                        </span>
                        <span class="span-two"><h1>No</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>04</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten-4">03:34</div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                  </div>
                  <div class="right-two-two right-two-divs">
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>05</h2>
                      <h2>Enter Sample Name</h2>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Take White</h1>
                        </span>
                        <span class="span-two"><h1>Start</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>05</h2>
                      <h2>Enter Sample Name</h2>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Take White</h1>
                        </span>
                        <span class="span-two"><h1>Start</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>03</h2>
                      <h1>White?</h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Yes</h1>
                        </span>
                        <span class="span-two"><h1>No</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>04</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten-4">03:34</div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                  </div>
                  <div class="right-two-three right-two-divs">
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>01</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Take White</h1>
                        </span>
                        <span class="span-two"><h1>Start</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>02</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten-2">
                        03:34
                        <h2>25%</h2>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>03</h2>
                      <h1>
                        Stop?
                        <p style="font-size: 10px; margin-top: 2px">TSRT1425</p>
                      </h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Yes</h1>
                        </span>
                        <span class="span-two"><h1>No</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>04</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten-4">03:34</div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                  </div>
                  <div class="right-two-four right-two-divs">
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>01</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Take White</h1>
                        </span>
                        <span class="span-two"><h1>Start</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>02</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Take White</h1>
                        </span>
                        <span class="span-two"><h1>Start</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>03</h2>
                      <h1>
                        Stop?
                        <p style="font-size: 10px; margin-top: 2px">TSRT1425</p>
                      </h1>
                      <div class="card-butten">
                        <span class="span-one">
                          <h1>Yes</h1>
                        </span>
                        <span class="span-two"><h1>No</h1></span>
                      </div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div class="divs containerTwo" onclick="showOverlay(this)">
                      <h2>04</h2>
                      <h1>TSRT1425</h1>
                      <div class="card-butten-4">03:34</div>
                      <div class="overlay" style="display: none">
                        <i class="fa-solid fa-check"></i>
                      </div>
                    </div>
                  </div>
                </section>
              </div>`
        )
      );
      function showOverlay(element) {
        var overlay = element.querySelector(".overlay");
        if (overlay.style.display === "none" || overlay.style.display === "") {
          overlay.style.display = "flex";
        } else {
          overlay.style.display = "none";
        }
      }
      document.getElementById("edit-user-nav").addEventListener("click", () =>
        updateNavContent(
          "edit-user-nav",
          `<div class="edit-user-nav">
                <h2>User Data</h2>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td>johndoe@example.com</td>
                    <td>Administrator</td>
                    <td>Active</td>
                    <td><button>Edit</button></td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>janesmith@example.com</td>
                    <td>Editor</td>
                    <td>Inactive</td>
                    <td><button>Edit</button></td>
                  </tr>
                  <tr>
                    <td>Sam Brown</td>
                    <td>sambrown@example.com</td>
                    <td>Viewer</td>
                    <td>Active</td>
                    <td><button>Edit</button></td>
                  </tr>
                  <tr>
                    <td>Lisa Ray</td>
                    <td>lisaray@example.com</td>
                    <td>Contributor</td>
                    <td>Active</td>
                    <td><button>Edit</button></td>
                  </tr>
                  <tr>
                    <td>Mike Green</td>
                    <td>mikegreen@example.com</td>
                    <td>Administrator</td>
                    <td>Inactive</td>
                    <td><button>Edit</button></td>
                  </tr>
                </table>
                <div class="create-user-form">
                  <h2>Create User</h2>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <select>
                    <option value="Administrator">Administrator</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Contributor">Contributor</option>
                  </select>
                  <button>Create</button>
                </div>
              </div>`
        )
      );
      document.getElementById("logout-nav").addEventListener("click", () => {
        updateNavContent("logout-nav", "");
        window.location.href = "login.html";
      });
    