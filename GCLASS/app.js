<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Digital Dream Solutions</h1>
    <p>Web Development and Digital Marketing</p>
    <p id="test" onclick="self.innerHTML='Forward ever';">We are progressing</p>
    <h2>JavaScript for the web</h2>
    <p>JavaScript is a powerful language for creating interactive web pages.</p>
    <button id="btn" onclick="changer()">Click Me</button>

    <script>
      function changer() {
        document.getElementById('btn').innerText = 'I have been clicked'
        document.getElementById('btn').style.backgroundColor = 'green'
        document.getElementById('btn').style.fontSize = '30px'
        document.getElementById('btn').style.color = 'white'
        document.getElementById('btn').style.padding = '20px'
        document.getElementById('btn').style.borderRadius = '5px'
      }
      // const heading = document.querySelector('h1');
      // heading.style.color ='red';
      // heading.style.fontSize = '30px';
      // heading.style.fontWeight = 'bold';
      // heading.style.textTransform = 'uppercase';
    </script>
  </body>
</html>
