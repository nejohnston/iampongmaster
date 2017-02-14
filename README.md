# Pong Game

An interactive pong game using SVGs. Focusing on Object Orientated Programming in JavaScript.

![Pong!](./public/screenshots/pong-snippet.png)

# My Learning Outcomes

This project introduced us to _Object-Orientated Programming (OOP)_. _OOP_ is a method of programming that enables you to simply
create an object in your code. This object could be anything, but in relation to English it is seen as a noun. A noun can be
described with adjectives and can be *moved* with verbs. These adjectives and verbs, in OOP, are referred to as properties and
methods respectively. Two examples of my dog's properties are her name, Sadie, and her color, black. Examples that are not
properties of my dog are walking, eating, or sleeping. These are all methods of my dog. An example of a method that would not
be able to be called is petting. Although it is a method, that would be an object (person) acting upon another object (dog).

Now the question remains: how do we group these awesome objects with their properties and methods? The answer is _Classes_!
Classes act as a blueprint for objects, and the computer builds the object. Furthermore, this makes for readily reusable code
(more on that to come). For now, lets look at an example of the object _Dog_:

<pre><code>
class Dog {
    constructor(name, color) {
    this.name = name
    this.color = color
    }

beg() {
    ...
    }
}</code></pre>

Here we have built the class of Dog with a constructor class and a method grouped together. The constructor class makes it easy to
reuse the class Dog and create new instances of it aswell. To do so, we use the word _new_:

<pre><code>
let sadie = new Dog ('Sadie', 'black');
let trump = new Dog ('Trump', 'orange');</code></pre>

To top it all off, and what I believe really hits home the reusability of OOP is the ability to _Import_/ _Export_ classes. This means
that if class Dog is in the file *hello.js* and I need it in the file *world.js*, all I need to do is _export_ it from *hello.js*
and _import_ it to *world.js*, like so:

<pre><code>
export default class Dog {

class Dog {
    constructor(name, color) {
    this.name = name
    this.color = color
    }

beg() {
    ...
    }
}
}

// world.js
import Dog from "./hello.js";</code></pre>

Conclusively, our Pong project was fundamentally an elaborate portrayal of OOP. We created objects with classes; used constructor
classes to define properties of objects; and used methods to create the active elements of Pong's svg's. Furthermore,
we created new instances of classes in foreign files by way of importing and exporting. OOP is awesome because it not only
organizes JavaScript but also makes the syntax straightforward. Can confirm OOP is awesome!!!

*This is the banner displayed to pong's winning player. As you can see, the properties color, font-family, x/y position and font-size in the following code are all apparent.*
![Resulting Winner Banner from following code snippet](./public/screenshots/winner-banner.png)

*This is the snippet of code from the winner's banner. Exported by _Winner.js_, it is imported by _Game.js_.*
![Pong Winner Banner code snippet](./public/screenshots/winner-snippet.png)


