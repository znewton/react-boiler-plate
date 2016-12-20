import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<article>
				<h2>About this Site</h2>
				This is a framework I made for funsies!

				<h3>Front-end <small>HTML5, CSS3, JS, Font Awesome, React</small></h3>
				When making design decisions, <a href="http://www.lukew.com/ff/entry.asp?933">mobile first</a> was always in mind. For the first development cycle of making everything work,
				the page was only viewed in either a small window or the mobile inspection mode on Google Chrome. It was only after
				all of the components worked on that smallest screen size that breakpoints were added: first for tablet at <code>628px</code>, then
				for desktop at <code>992px</code>.
				<br/><br/>
				Another large design point when developing this site was an incorporation of some <a href="https://material.google.com/">material design guidelines</a>. An example
				of this is the form components, where the label (placeholder) never goes away so that the user does not have to struggle
				to remember what a field was for. A second example of this is the clickable elements such as buttons that have a slight
				drop shadow that increases on hover to indicate action.
				<br/><br/>
				In terms of inspiration, motivation, and reference, a lot was drawn from looking through the <a href="http://tympanus.net/codrops/category/playground/">Codrops Playground</a>.
				Some of the key demos for me include <a href="http://tympanus.net/Development/InlineAnchorStyles/">Inline Anchor Styles</a>,
				 <a href="http://tympanus.net/Blueprints/SlidePushMenus/">Slide Push Menus</a>, and
				 <a href="http://tympanus.net/Development/AnimatedCheckboxes/">Animate Checkboxes</a>.
				For coding style and methodology on the other hand, most of that training comes from working at Iowa State University
				Web Development Services under the tutelage of Zak Bell.
			</article>
		);
	}
}

export default About;