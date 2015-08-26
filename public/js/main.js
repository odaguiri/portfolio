function Skill() {
  // init
  var r = Raphael('skills');
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
  r.setSize(400, 400);
  r.circle(200, 200, 59).attr({ stroke: 'none', fill: '#d25a7d' });

  // set title
  var title = r.text(200, 200, defaultText).attr({
    font: '16px Open Sans',
    fill: '#fff'
  }).toFront();

  // random
  function Random(l, u) {
    return Math.floor((Math.random()*(u-l+1))+l);
  }

  // set arc function
  r.customAttributes.arc = function(value, color, rad){
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
    z = r.path().attr({ arc: [percent, color, radius], 'stroke-width': arcWidth });
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

window.onload = function() {
  new Skill();
}