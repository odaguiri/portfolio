function Skill() {
  // init
  var paper = Raphael('skills');
  var radius = 55;
  var defaultText = 'Me';
  var speed = 250;
  var skillsData = document.getElementById('skills-data');

  // arc
  var arcWidth = 15;
  var arcSpacement = 3;
  var arcs = [];
  var arcsStroke = [];

  // build center circle
  paper.setSize(400, 400);
  paper.circle(200, 200, 59).attr({ stroke: 'none', fill: '#d25a7d' });

  // set title
  var title = paper.text(200, 200, defaultText).attr({
    font: '16px Open Sans',
    fill: '#fff'
  }).toFront();

  // random
  function Random(l, u) {
    return Math.floor((Math.random()*(u-l+1))+l);
  }

  // set arc function
  paper.customAttributes.arc = function(value, color, rad){
    var v = 3.6*value,
      alpha = v == 360 ? 359.99 : v,
      random = Random(91, 240),
      a = (random-alpha) * Math.PI/200,
      b = random * Math.PI/200,
      sx = 200 + rad * Math.cos(b),
      sy = 200 - rad * Math.sin(b),
      x = 200 + rad * Math.cos(a),
      y = 200 - rad * Math.sin(a),
      path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 200), 1, x, y]];
    return { path: path, stroke: color }
  }

  // create arcs from skills data
  var arcs = skillsData.querySelectorAll('.arc');
  for(var i = 0; i < arcs.length; i++) {
    // set attributes
    var color = arcs[i].querySelector('.color').value;
    var percent = arcs[i].querySelector('.percent').value;
    var text = arcs[i].querySelector('.text').textContent;

    // radius spacement
    radius += (arcWidth + arcSpacement);

    // arc
    z = paper.path().attr({ arc: [percent, color, radius], 'stroke-width': arcWidth });
    z['color'] = color;
    z['percent'] = percent;
    z['text'] = text;

    // set events
    z.mouseover(function() {
      _this = this;

      _this.stop().animate({ 'stroke-width': (arcWidth + arcSpacement) }, (speed * 2), 'elastic');
      title.stop().animate({ opacity: 0 }, speed, '>', function(){
        this.attr({ text: _this['text'] + '\n' + _this['percent'] + '%' }).animate({ opacity: 1 }, speed, '<');
      });
    });

    z.mouseout(function(){
      this.stop().animate({'stroke-width': arcWidth, opacity: 1}, speed * 4, 'elastic');
      title.stop().animate({ opacity: 0 }, speed, '>', function(){
        title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
      });
    });
  }
}

function Scene(){
  var hero = document.querySelector('.hero');
  var canvas = document.createElement('div');

  canvas.setAttribute('id', 'scene');
  canvas.setAttribute('class', 'hero-drawable');
  hero.insertBefore(canvas, hero.firstChild);

  var paper = Raphael('scene');

  // ocean
  var ocean = paper.rect(0, 0, document.body.clientWidth, hero.offsetHeight);
  ocean.attr('fill', '#232731');

  function setSize() {
    paper.setSize(document.body.clientWidth, hero.offsetHeight);
    ocean.attr('width', document.body.clientWidth);
  }

  // add elements
  setSize();

  var canvasJellyFish = document.createElement('div');
  canvasJellyFish.setAttribute('id', 'sceneJellyfish');
  canvasJellyFish.setAttribute('class', 'hero-drawable hero-jellyfish');
  canvasJellyFish.style.zIndex = '30';
  canvas.insertBefore(canvasJellyFish, canvas.firstChild);
  var paperJellyfish = Raphael('sceneJellyfish');
  paperJellyfish.setSize(370, 400);

  new Jellyfish(paperJellyfish);

  // add listeners
  window.onresize = function() {
    setSize();
  }
}

function Jellyfish(paper){

  var structure = {
    width: 140,
    height: 370,
    head: {
      internal: {
        stroke: '1.3px',
        color: '#414E6F',
        path: Raphael.parsePathString('M15,68.25c0,0-20-28.25,5-38.75s32.43-12,48.34-11s28.66-1,44.91,12.75s23,16,10,37C123.25,68.25,29,60.5,15,68.25z'),

      },
      external: {
        stroke: '2.5px',
        color: '#414E6F',
        path: Raphael.parsePathString('M16.25,71.75c0,0-21.75,3.5-14.25-32.5s50.5-38.5,66.75-39S131.5,7,135.75,43S116,75.5,112.5,73.5c0,0-9.25,5.787-9.25,1.144c0,0-11,5.356-15-1.644c0,0-9.5,7.75-16.25-1.25c0,0-7.75,7-16.5-0.25c0,0-8.25,5.75-13,0c0,0-7.25,6-12.25-0.5C30.25,71,24,78,16.25,71.75z'),
      }
    },
    tentacles: [
      {
        stroke: '1px',
        color: '#414E6F',
        direction: -1,
        path: Raphael.parsePathString('M10.695,71.267C10.695,71.267,27,215.5,24,262.5')
      },
      {
        stroke: '1px',
        color: '#414E6F',
        direction: -1,
        path: Raphael.parsePathString('M29.989,71.267C29.989,71.267,47.5,260,41,290.5')
      },
      {
        stroke: '1px',
        color: '#414E6F',
        direction: -1,
        path: Raphael.parsePathString('M55.5,71.5c0,0,11,245.5,3.5,264')
      },
      {
        stroke: '1px',
        color: '#414E6F',
        direction: 1,
        path: Raphael.parsePathString('M88.25,73c0,0-11.25,235-5.75,262.5')
      },
      {
        stroke: '1px',
        color: '#414E6F',
        direction: 1,
        path: Raphael.parsePathString('M108,73.368c0,0-16.5,184.632-6,230.132')
      },
      {
        stroke: '1px',
        color: '#414E6F',
        direction: 1,
        path: Raphael.parsePathString('M125.25,73.368c0,0-3.408,122.719,0,189.132')
      },
      {
        stroke: '0.25px',
        color: '#fff',
        direction: 0,
        path: Raphael.parsePathString('M44.187,73c0,0-10.251,1.5-7.969,7.5s8.656,6,7.969,8s1.707,5.5-1.74,9s-3.053,5.5,0,6.5s4.783,8.5,1.918,11.5s-6.471,50.833-1.918,58.5s9.22,29.333,8.22,34.333S44,256.666,48,259.333s6.333,2.667,5.333,6s-4.666,5.333-2.333,6.333s2.333,7.001,1,8.334s-5,13-2,16s4.128,1,3.564,10.666s-3.155,14.334,0.14,18s0.295-41.333,3.295-55s-4.667-19.334-4-22.667s1.334-41,2.5-55s-4.5-19.333-6.167-19s-2.667-9,0.333-8s10.001-10.667,5.834-11.333s-5.833-8.333,0-9.667s10.833-9,8.833-12.333s-8.764-13-2.715-19.333S73,99.666,66.333,98.666s2.205-23.515,9.835-23.387')
      },
      {
        stroke: '0.25px',
        color: '#fff',
        direction: 0,
        path: Raphael.parsePathString('M61.618,74.564c0,0-2.432,10.651,0,14.766s14.716,19,13.049,25.333s-9.641,13.667-6.987,17.667s2.013,14.667,0,19s-10.777,16.667-6.062,17.667s4.715-3.667,4.715,1s-3.333,2.333-3.333,6s-1.666,2,0.667,6.667s3,5.334,0.667,8.667s-3.764,6.84-2.715,12.92s9.78,20.414,5.915,26.08s-3.467,18.001,0,25.334s2.984,9.334,1.226,9s-5.758,4.667-3.425,6s1,6.334,0.667,8s-2.268,12.334,1.533,10s4.134-0.994,3.134,1.836s-5,4.164-4.667,7.164s8.333,24.095,6.333,27.214s-8.333,26.786-2,33.119s4.976,5,4.488,0s-0.154-2.666-2.488-5s-5.32-7.727-1.827-11.53s5.497-9.136,5.662-11.47s5.168-28.66,0-26.497s-6.501-3.504-3.835-6.837s7.336-19.333,3.835-18.333s-7.168-36-2.835-43s3.333-28.335-0.333-26.668s-2.333-17.667,1.333-17.333s5.003-26.123,1.835-23.395s7.665-15.606,12.082-17.939s-8.917-17.333-9.917-17s3-21.333,4.333-26s7-20,11.667-20.667s-7.538-11.946-9.716-11.238')
      },
      {
        stroke: '0.25px',
        color: '#fff',
        direction: 0,
        path: Raphael.parsePathString('M103.252,76.603c0,0,5.415,2.725,7.415,2.725s2.333,5.333,0,9s-13.992,6.667-12.163,15.333s11.162,2.667,9.496,6.333s-6.658,9.333-9.496,13.333s-9.171,10.667-6.171,13.667s4.443,9.011,3.055,9.339s-2.91,13.486-7.138,20.549s-5.75,26.445,0,23.778s9.526,6.333,7.138,9.667S84.5,213.662,88.25,214.662s2.25,9.999,0,14.666s-2.917,61.666,2.083,57s6,9.666,2.667,15s-8,21.099-7,23.55s-7.026,2.45-1.513-16.216s2.415-17.667,0.131-16s-1.716-6.333,0-7.333s1.787-10-2.082-10s-8.385-11.669-4.72-14.333s7.155-24.001,3.17-25.334s-5.668-25.658,2.007-32.162c7.675-6.504,0.129-9.9-3.659-11.504S66.8,173.183,74,154.33s-1.997-10.333,2.168-12.333s-6.641-22.17,5.429-30.418s7.568-33.65,1.07-34.975')
      }
    ]
  }

  var head = {
    internal: null,
    external: null
  };

  var tentacles = [];

  function draw() {
    head.internal = paper.path(structure.head.internal.path)
      .attr({stroke: structure.head.internal.color, 'stroke-width': structure.head.internal.stroke});

    head.external = paper.path(structure.head.external.path)
      .attr({stroke: structure.head.external.color, 'stroke-width': structure.head.external.stroke});

    for(var i = 0; i < structure.tentacles.length; i++) {
      var tentacle = structure.tentacles[i];
      tentacles[i] = paper.path(tentacle.path)
        .attr({stroke: tentacle.color, 'stroke-width': tentacle.stroke});
    }
  }

  function position(positionX, positionY, speed, easing){
    var translate = [['t', (paper.width/2 - structure.width/2) + positionX, (paper.height/2 - structure.height/2) + positionY]];
    head.internal.animate({ transform: translate }, speed, easing);
    head.external.animate({ transform: translate }, speed, easing);

    for(var i = 0; i < tentacles.length; i++) {
      tentacles[i].animate({ transform: translate }, speed, easing);
    }
  }

  function center(){
    var translate = [['t', (paper.width/2 - structure.width/2), (paper.height/2 - structure.height/2)]];
    head.internal.transform(translate);
    head.external.transform(translate);

    for(var i = 0; i < tentacles.length; i++) {
      tentacles[i].transform(translate);
    }
  }

  // global
  var signal = 1;
  function move() {
    moveHead();
    moveTentacles();

    position(0, (10 * signal), (signal == 1 ? 3000 : 900), (signal == 1 ? 'linear' : 'linear'));

    setTimeout(function(){
      signal = signal * -1;
      window.requestAnimationFrame(move);
    }, (signal == 1 ? 3000 : 1200));
  }

  function moveHead() {
    var cloneExternal = structure.head.external.path;
    var cloneInternal = structure.head.internal.path;

    cloneExternal[1][3] = cloneExternal[1][3] - (40 * signal);
    cloneExternal[1][5] = cloneExternal[1][5] - (10 * signal);
    cloneExternal[3][1] = cloneExternal[3][1] - (40 * signal);

    cloneInternal[1][3] = cloneInternal[1][3] - (10 * signal);
    cloneInternal[1][5] = cloneInternal[1][5] - (5 * - signal);
    cloneInternal[2][4] = cloneInternal[2][4] - (0.10 * signal);


    head.external.animate({path: cloneExternal}, (signal == 1 ? 3000 : 900), 'ease-in-out');
    head.internal.animate({path: cloneInternal}, (signal == 1 ? 3000 : 900), 'ease-in-out');

  }

    for(var i = 0; i < structure.tentacles.length; i++) {
      var tentacle = structure.tentacles[i];
      console.log(tentacle.path);
     }
  function moveTentacles() {
    var cloneTentacles = structure.tentacles;

    for(var i = 0; i < tentacles.length; i++) {
      var tentacle = cloneTentacles[i];

      if(tentacle.direction != 0) {
        tentacle.path[1][3] = tentacle.path[1][3] - (100 * signal * -tentacle.direction);
        // tentacle.path[1][4] = tentacle.path[1][-4] - (700 * -signal);
        tentacle.path[1][5] = tentacle.path[1][5] + (50 * signal * tentacle.direction);
        tentacle.path[1][6] = tentacle.path[1][6] + (3 * -signal);

        tentacles[i].animate({path: tentacle.path}, (signal == 1 ? 3000 : 700), 'ease-in-out');
      }
    }
  }

  // draw our jellyfish
  draw();
  center();

  window.requestAnimationFrame(move);
  window.onresize = function(){
    center();
  }
}

window.onload = function() {
  new Skill();
  new Scene();
}