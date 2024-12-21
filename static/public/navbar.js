// Function to create and insert the navbar
function insertNavbar() {
  // Define the HTML for the navbar
  const navbarHTML = `
  <style type="text/css">
          .secret-mode {
            color: red;
            animation: secret-glow 2s infinite alternate;
        }

        @keyframes secret-glow {
            0% {
                text-shadow: 0 0 10px red;
            }
            100% {
                text-shadow: 0 0 20px red;
            }
        }
    .context-menu {
      position: absolute;
      text-align: center;
      background: lightgray;
      border: 1px solid black;
      border-radius: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, .1);
      padding: 10px;
    }

    .context-menu ul {
      padding: 0px;
      margin: 0px;
      min-width: 150px;
      list-style: none;
    }

    .context-menu ul li {
      padding-bottom: 7px;
      border-radius: 100px;
      padding-top: 7px;
      border: 1px solid black;
    }

    .context-menu ul li a {
      text-decoration: none;
      color: black;
    }

    .context-menu ul li:hover {
      background: darkgray;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: red;
    }

    .navbar {
      overflow: hidden;
      background-color: #333;
    }

    .navbar a {
      float: left;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    .dropdown {
      float: left;
      z-index: 1;
      overflow: hidden;
    }

    .dropdown .dropbtn {
      font-size: 16px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
      font-family: inherit;
      margin: 0;
    }

    .navbar a:hover,
    .dropdown:hover .dropbtn {
      background-color: red;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropdown-content a:hover {
      background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>

  <div id="contextMenu" class="context-menu" style="display:none">
    <ul>
      <li onclick="openSettings('/')"><a>Home</a></li>
      <li onclick="openSettings('/proxy')"><a>Proxy</a></li>
      <li onclick="cloakAll()"><a>Cloak Tab</a></li>
    </ul>
  </div>

  <div class="navbar">
    <a href="/index2.html">Home</a>
    <a href="/g">Games</a>
    <a href="/tabs.html">Tabs (WIP)</a>
    <a href="/contact.html">Contact</a>
    <a href="/settings.html">Settings</a>
    <a href="/category/shooting.html">Shooting</a>
    <a href="/category/apps.html">Apps</a>
    <div class="dropdown">
      <button class="dropbtn">
        Popular Games
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="/page/1v1lol.html">1v1.lol</a>
        <a href="/app/geforce.html">Fortnite</a>
        <a href="/page/bloxro.html">Roblox</a>
        <a href="/page/taggame.html">Tag Game</a>
      </div>
    </div>
  </div>

  <script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
      server: '1308263296511512647', // School Heaven
      channel: '1308263296981270552' // #general
    })
  </script>
  <script>
    function goFullscreen(id) {
      var element = document.getElementById(id);

      if (element.requestFullscreen) {
        element.requestFullscreen().catch((err) => {
          console.error(\Failed to enter fullscreen mode: \${err.message}\);
        });
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen().catch((err) => {
          console.error(\Failed to enter fullscreen mode: \${err.message}\);
        });
      } else if (element.webkitRequestFullscreen) { // Older WebKit
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      } else {
        console.error("Fullscreen API is not supported on this browser.");
      }
    }
  `;
  // Create a div element to hold the navbar
  const navbarDiv = document.createElement('div');
  navbarDiv.innerHTML = navbarHTML;

  // Insert the navbar at the top of the body
  const body = document.body;
  body.insertBefore(navbarDiv, body.firstChild);
}

document.addEventListener("DOMContentLoaded", () => {
  insertNavbar();
});
