# Frontend Foundation — Start With the Basics

## Interpretation

Interpretation is basically the way you think you understand things.

Try to break things down.

Everyone has their own way of looking at things and implementing them. There can be **N number of ways** to build the same thing, and that's completely fine.

But the important part is that you **align yourself with the result and the direction** that takes you towards the destination.

So I would suggest you to try something first on your own.

Give it at least **20–30 minutes** without immediately asking for the solution.

Right now, while I'm explaining this to you, I'm also not using AI to actually think about the solution. Of course, I'm using it to format this text — not gonna lie 😂 — because I don't want you to suffer through my worst English.

But the actual thought process is mine.

---

## Try to Understand Before You Build

Coming back to the topic.

Take a book.

Draw things.

Try to understand how you can build something.

If you see a diagram, try to make the same diagram in your book.

Don't worry about writing code yet.

Right now, the goal is **not to build some full-fledged shit**.

Nah.

That's just a waste of time at this stage.

A common mistake beginners make is that they immediately jump into building something huge without taking the time to build the foundation first.

They start adding layers without having the base.

First build the base.

Then start layering.

Then start experimenting.

---

## Think in Blocks

If you can look at something and draw it, that's already a good start.

And if you're a fresher, that's completely fine.

You don't have to remember all the code.

That's not the goal right now.

Here, you need to play with:

* What things need to be together?
* What things should stay separate?
* How should they connect?
* What takes space?
* What should contain what?
* How does one part communicate with another?

Basically, you need to start **connecting the dots**.

That's pretty much what frontend development is about.

It looks easy to me because my fundamentals are clear enough to think about it this way.

But when you're starting, you're going to struggle.

And that's completely normal.

That's actually what I want you to experience first.

I want you to build the **mindset** before you start building the application.

---

# Start With the Skeleton

Think about your body.

If you don't have a proper skeleton or base structure, no matter how much muscle you put on top of it, everything is going to look irregular.

Same mindset here.

Before adding all the fancy stuff, build the skeleton.

For example:

```text
┌──────────────────────────────────────┐
│                NAVBAR                │
├──────────────┬───────────────────────┤
│              │                       │
│   SIDEBAR    │         MAIN          │
│              │                       │
│              │                       │
│              │                       │
└──────────────┴───────────────────────┘
```

Now you have some skeleton ready in your mind.

Think like you're designing the architecture of a building.

First comes the **design and blueprint**.

Then you start taking action step by step.

But when you're designing that blueprint, it's important to understand how much space each area needs and how the different sections relate to each other.

The same thing applies here.

You already have the layout in your mind.

Now we're entering the **code level**.

---

# Start With HTML

The basic thing we're going to start with is HTML.

Of course, you should go through an HTML course or at least do a basic overview so you understand the common HTML tags and what they're used for.

But the way I personally learned it was a little different.

I don't know whether everyone will learn the same way or not.

Whenever I wanted to learn something, I started with the **output I wanted**.

I would think:

> "Okay, I want this output. What things are required to create it?"

Then I would work backwards.

For example, let's take the skeleton we just created.

I want to create this:

```text
┌──────────────────────────────────────┐
│                NAVBAR                │
├──────────────┬───────────────────────┤
│   SIDEBAR    │         MAIN          │
└──────────────┴───────────────────────┘
```

So, obviously, I need some HTML elements to build this.

And luckily, HTML already provides predefined elements for many common structures.

I don't have to create everything from scratch.

---

## Think About the Requirement

I need a navbar.

I look at the available HTML elements and think:

> "Okay, there is a `<nav>` element."

Cool.

I got one answer.

Maybe I create a `div` and put my `nav` inside it.

Now I need a sidebar.

What do I need?

There is an `<aside>` element.

Cool.

Now I have my sidebar.

Then I have the main content.

The main content can contain basically anything depending on what the application needs.

---

# Dynamic Main Content

Now here's where the framework you use starts becoming relevant.

You might use:

* React
* Angular
* Vue
* or something else

The concept remains similar.

The main content is **dynamic**.

The Navbar can remain the same.

The Sidebar can remain the same.

But the content in the middle can change depending on the page.

For example:

```text
Navbar
   │
Sidebar ─── Dashboard
   │
Sidebar ─── Users
   │
Sidebar ─── Settings
```

So now you need to think:

> "How can I keep the Navbar and Sidebar common while changing only the main content?"

That's where you need to do some R&D yourself.

I can give you one hint:

> **Think about creating one common Layout Wrapper.**

That Layout Wrapper can keep the Navbar and Sidebar in one place, while the main content changes.

That's exactly the kind of problem-solving mindset I want you to develop.

---

# Section Division

Once you've figured out the basic HTML elements, the next question becomes:

> "How do I put these things together?"

That's where **section division** comes in.

Look at our layout again:

```text
┌──────────────────────────────────────┐
│                NAVBAR                │
├──────────────┬───────────────────────┤
│              │                       │
│   SIDEBAR    │         MAIN          │
│              │                       │
└──────────────┴───────────────────────┘
```

The Navbar is alone.

It takes the full width.

So that's one section.

But the Sidebar and Main Content are next to each other.

They're neighbours.

So we need another section to group those two together.

Something like:

```text
Layout
│
├── Navbar
│
└── Content Section
     │
     ├── Sidebar
     │
     └── Main
```

And that is where a simple `div` can become useful.

You create a section, put the Sidebar and Main inside it, and now you have a structure.

---

# Congratulations 🎉

If you've reached this point, you've already understood several important things.

You now understand:

* How to look at a UI and break it into sections.
* How to identify common HTML elements.
* How to create a basic HTML structure.
* How to group related elements together.
* How a common Layout Wrapper can keep shared UI in one place.
* How the main content can remain dynamic.
* How to think about a page as a collection of sections and subsections.

And this is going to make playing with CSS much more fun.

Because now you actually have something to style.

---

# Now Comes CSS

Now the big guy enters the game:

**CSS.**

At the beginning, I would suggest using **Vanilla CSS**.

Build your foundation first.

Once your CSS fundamentals become strong, you can move towards frameworks or tools like Tailwind CSS.

Don't rush into Tailwind just because it's popular.

If you understand CSS properly, Tailwind will become much easier later.

So make sure you **struggle with CSS a little**.

That struggle is useful.

---

# HTML vs CSS

Think about it like this:

### HTML

HTML is your **blueprint and structure**.

It answers:

> "What things exist?"

You divide your page into:

* sections
* subsections
* navigation
* sidebar
* main content
* buttons
* forms
* headings
* etc.

### CSS

CSS answers:

> "How should those things look and behave visually?"

You decide:

* where things should be
* how much space they should take
* how they should align
* how big they should be
* how much spacing they should have
* how they should look

So:

```text
HTML
  ↓
Structure
  ↓
CSS
  ↓
Presentation + Layout
```

That's the mental model.

---

# Think in Requirements

Now let's come back to our skeleton.

We already created the HTML.

Now look at the requirements:

```text
Navbar
    ↓
Should be at the top

Sidebar
    ↓
Should be on the left

Main Content
    ↓
Should be on the right

Sidebar + Main
    ↓
Should sit next to each other
```

Now comes the important question:

> **Which CSS properties can I use to achieve these requirements?**

And this is exactly where you're going to get stuck.

Good.

That's where I want you to get stuck.

Don't immediately ask AI for the answer.

Go through one CSS course, blog, or YouTube video first.

You don't need to master CSS.

You just need to get an **overview of the major concepts**.

Learn enough to understand things like:

* Box Model
* Display
* Positioning
* Flexbox
* Grid
* Width and Height
* Margin and Padding
* Alignment
* Spacing

Once you have that basic conceptual clarity, come back to your layout.

Then try to solve the requirements yourself.

---

# Start With the Container

For example, I first look at the entire container.

Inside that container I have:

```text
Navbar
Sidebar
Children
```

So I ask myself:

> "What kind of layout do I need here?"

I can experiment with CSS properties.

Maybe I try Flexbox.

Maybe I need to understand the direction of the elements.

Maybe I need the overall container to arrange its sections vertically.

Don't just copy a CSS property because someone told you to.

Understand:

> **Why am I using this property here?**

That's the important part.

---

# Use Borders While Learning CSS

One thing I strongly recommend:

> **Always play with borders while you're building a layout.**

Seriously.

Borders are one of the easiest debugging tools when you're learning CSS.

For example:

```css
.container {
  border: 2px solid red;
}

.navbar {
  border: 2px solid blue;
}

.sidebar {
  border: 2px solid green;
}

.main {
  border: 2px solid orange;
}
```

Now you can actually **see your boxes**.

You can understand:

* How big they are.
* Where they start.
* Where they end.
* Which element contains which.
* How much space they're taking.
* Whether your layout is behaving the way you expected.

Don't think of the border as decoration.

Think of it as a **debugging tool**.

---

# Build One Step at a Time

Don't try to write all the CSS at once.

Take one requirement.

For example:

> Navbar should be at the top.

Solve that.

Then look at the result.

Next:

> Sidebar and Main should sit next to each other.

Solve that.

Look at the result.

Then:

> Sidebar should have some space.

Solve that.

Then:

> Main should use the remaining space.

Solve that.

And keep going.

This is how you build your mental mapping.

```text
Requirement
     ↓
What do I need?
     ↓
Which CSS concept handles this?
     ↓
Try it
     ↓
Look at the result
     ↓
Understand what happened
     ↓
Adjust
     ↓
Repeat
```

That's the actual process.

---

# Don't Try to Memorize Everything

You don't need to remember every CSS property.

You need to understand **what problem a property solves**.

For example, instead of memorizing:

```text
property → value → syntax
```

Think:

```text
I have this problem.
        ↓
What CSS concept solves this?
        ↓
What property should I investigate?
```

That's a much stronger skill.

Because when you forget the exact syntax later, you can always look it up.

But if you don't understand the problem itself, no amount of memorization will help.

---

# Use AI When You're Stuck

At some point you're going to say:

> "Bro, I have no fucking idea why this is happening." 😂

That's completely fine.

Use AI.

But don't immediately say:

> "Give me the complete code."

Instead, give AI your current code and explain what you're trying to achieve.

Ask things like:

> "I'm trying to make these two sections sit next to each other. Which CSS concept should I investigate?"

Or:

> "Explain why my current layout isn't behaving as I expect, but don't give me the final solution."

Or even:

> "Give me a hint about what I'm misunderstanding."

The goal is to use AI to **improve your mental mapping**, not replace it.

You should still be the one connecting the dots.

---

# The Mental Mapping

This is the most important part of the whole exercise.

When you see:

```text
┌──────────────────────────────────────┐
│                NAVBAR                │
├──────────────┬───────────────────────┤
│   SIDEBAR    │         MAIN          │
└──────────────┴───────────────────────┘
```

I want your brain to start thinking:

```text
UI requirement
      ↓
HTML structure
      ↓
Parent / Child relationship
      ↓
Section division
      ↓
CSS layout requirement
      ↓
CSS concept
      ↓
Experiment
      ↓
Debug
      ↓
Result
```

That's the skill we're actually trying to build.

Not:

> "I know how to write `display: flex`."

Anyone can memorize that.

The real skill is:

> **"I have a layout requirement. I can figure out which concept I need to solve it."**

That's frontend thinking.

---

# One Rule — Always Visualize

Whenever you're building something, **draw it first**.

Even if it's ugly.

Even if it's just boxes on paper.

Even if you're working on something tiny.

Draw:

```text
┌───────────────┐
│               │
│               │
└───────────────┘
```

Then:

```text
┌───────┬───────┐
│       │       │
│       │       │
└───────┴───────┘
```

Then:

```text
┌──────────────────────┐
│        NAVBAR        │
├───────┬──────────────┤
│       │              │
│ SIDE  │    MAIN      │
│       │              │
└───────┴──────────────┘
```

You are essentially creating a **mental blueprint** before you write the code.

And once that mental blueprint becomes clear, the code becomes much easier to reason about.

---

# Finally

Don't rush this.

You're not trying to finish a frontend application today.

You're trying to understand **how to think when building a frontend application**.

That's a completely different goal.

Start with:

```text
Draw
 ↓
Understand
 ↓
Break into sections
 ↓
Choose HTML elements
 ↓
Build the structure
 ↓
Identify layout requirements
 ↓
Learn the CSS concept
 ↓
Experiment
 ↓
Debug with borders
 ↓
Understand
 ↓
Move to the next layer
```

And remember:

> **The goal isn't to avoid struggling. The goal is to struggle in the right direction.**

Once your foundation becomes strong, you can start layering things on top of it.

Then you can experiment.

Then you can move faster.

Then frameworks like Tailwind, component libraries, animations, responsive design, state management, APIs, and all the other fancy stuff become much easier to understand.

But first...

**Build the skeleton.**

And enjoy the process.
