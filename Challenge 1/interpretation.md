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

# Try to Understand Before You Build

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

# Think in Blocks

If you can look at something and draw it, that's already a good start.

And if you're a fresher, that's completely fine.

You don't have to remember all the code.

That's not the goal right now.

Here, you need to play with:

- What things need to be together?
- What things should stay separate?
- How should they connect?
- What takes space?
- What should contain what?
- How does one part communicate with another?

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

# Think About the Requirement

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

- React
- Angular
- Vue
- or something else

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

- How to look at a UI and break it into sections.
- How to identify common HTML elements.
- How to create a basic HTML structure.
- How to group related elements together.
- How a common Layout Wrapper can keep shared UI in one place.
- How the main content can remain dynamic.
- How to think about a page as a collection of sections and subsections.

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

- sections
- subsections
- navigation
- sidebar
- main content
- buttons
- forms
- headings
- etc.

### CSS

CSS answers:

> "How should those things look and behave visually?"

You decide:

- where things should be
- how much space they should take
- how they should align
- how big they should be
- how much spacing they should have
- how they should look

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

- Box Model
- Display
- Positioning
- Flexbox
- Grid
- Width and Height
- Margin and Padding
- Alignment
- Spacing

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

- How big they are.
- Where they start.
- Where they end.
- Which element contains which.
- How much space they're taking.
- Whether your layout is behaving the way you expected.

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
│ SIDE  │    MAIN      │
│       │              │
└───────┴──────────────┘
```

You are essentially creating a **mental blueprint** before you write the code.

And once that mental blueprint becomes clear, the code becomes much easier to reason about.

---

# Now The Real Challenge Starts

Okay.

Till now, we have mostly been talking about **how to think**.

Now let's actually apply everything we have learned.

The layout is ready.

The basic HTML structure is ready.

The CSS fundamentals are getting clearer.

Now we're going to build the UI **section by section**.

And this is important:

> **Do not try to build the whole page at once.**

We're going to take one section.

Finish it.

Understand it.

Then move to the next one.

---

# Challenge 1 — Navbar

Look at the Navbar.

It has three major things:

```text
┌──────────────────────────────────────────────┐
│ LOGO          SEARCH                 AVATAR  │
└──────────────────────────────────────────────┘
```

Now stop.

Don't write CSS yet.

First ask yourself:

- What are the three things here?
- Which things are independent?
- Which things belong together?
- Which elements should take space?
- Which elements should stay towards a particular side?

You can already see that:

```text
Logo
```

is one section.

While:

```text
Search + Avatar
```

can be treated as another group.

So you might need a wrapper around those two.

Now the challenge is:

> **How do I position Logo on one side and Search + Avatar on the other side?**

I'm not giving you the solution.

Your hint is:

> **Think about the Flexbox concepts you just learned.**

You already know enough to start experimenting.

Build it.

Break it.

Put borders everywhere if you need to.

Then fix it.

---

# Challenge 2 — Sidebar

Once the Navbar is done, move to the Sidebar.

Now think about what a Sidebar actually contains.

Something like:

```text
SIDEBAR
│
├── Dashboard
├── Projects
├── Analytics
├── Users
└── Settings
```

Your job is to create the list.

Don't worry about making it beautiful yet.

First create the structure.

Then ask:

> How should these items be arranged?

Maybe vertically.

Maybe there is some spacing between them.

Maybe some items have icons.

Maybe some items are grouped.

Don't start adding complicated CSS.

First understand the requirement.

Then find the CSS concept that solves it.

Again:

> **Requirement → Concept → Experiment → Result**

---

# Challenge 3 — Main Content

Now we're entering the actual main content.

Don't look at the whole main section as one giant thing.

Break it down.

For example:

```text
MAIN
│
├── Header Section
│
├── KPI Section
│
└── Recent Projects
```

That's already much easier to think about.

Now we're back to our original principle:

> **Break the big thing into smaller things.**

---

# Challenge 4 — Main Header

Start with the Header section.

Look at what information needs to be displayed.

Create the HTML structure first.

Don't worry about perfect styling.

Once the structure exists, ask:

> How should these elements be positioned?

Maybe they're next to each other.

Maybe some are aligned to the right.

Maybe some need their own space.

Again, use the CSS concepts you've learned.

Don't randomly apply Flexbox just because we're learning Flexbox.

Ask what the **requirement** actually is.

---

# Challenge 5 — KPI Section

Now comes the KPI section.

Imagine:

```text
┌──────────┬──────────┬──────────┬──────────┐
│   KPI 1  │   KPI 2  │   KPI 3  │   KPI 4  │
└──────────┴──────────┴──────────┴──────────┘
```

Now this is where your Flexbox knowledge should start becoming more useful.

You already know about:

- `flex-direction`
- `flex-wrap`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `gap`
- alignment
- percentage-based flex sizing

So don't ask:

> "Which CSS should I copy?"

Ask:

> "What layout requirement do I have?"

Then:

> "Which Flexbox concept can solve this?"

For example, maybe you want:

```text
4 cards → one row
```

But on a smaller screen:

```text
2 cards → first row
2 cards → second row
```

And on mobile:

```text
1 card
1 card
1 card
1 card
```

Now you have a **real requirement**.

Go figure out which Flexbox concepts solve it.

That's where the learning becomes useful.

---

# Challenge 6 — Recent Projects

Now we come to the last section:

```text
Recent Projects
```

And here's where I want you to notice something important.

Don't use Flexbox everywhere just because you've learned Flexbox.

Look at the structure.

You have something like:

```text
┌────────────┬──────────────┬──────────┐
│ Category   │ Task         │ Status   │
├────────────┼──────────────┼──────────┤
│ XYZ        │ Backend      │ Active   │
├────────────┼──────────────┼──────────┤
│ Ecommerce  │ Frontend     │ Done     │
├────────────┼──────────────┼──────────┤
│ Analytics  │ Fullstack    │ Active   │
└────────────┴──────────────┴──────────┘
```

This is a **table**.

And a table has its own layout system.

So don't immediately try to force Flexbox into it.

Your challenge here is different.

---

# Table Layout Challenge

Before continuing with the Recent Projects section:

**Stop and learn the basics of CSS table layout.**

Go through:

- HTML table structure
- `<table>`
- `<thead>`
- `<tbody>`
- `<tr>`
- `<th>`
- `<td>`
- `border-collapse`
- `border-spacing`
- `table-layout`
- table width
- column sizing
- cell alignment

You don't need to master tables.

Just understand:

> **How does the browser arrange table rows and columns?**

Then come back and build the Recent Projects section yourself.

Your first goal is simply:

```text
┌────────────┬──────────────┬──────────┐
│ Category   │ Task         │ Status   │
├────────────┼──────────────┼──────────┤
│ XYZ        │ Backend      │ Active   │
│ Ecommerce  │ Frontend     │ Done     │
│ Analytics  │ Fullstack    │ Active   │
└────────────┴──────────────┴──────────┘
```

Once you get the basic output, then start improving:

- spacing
- borders
- alignment
- column widths
- typography
- responsiveness

One layer at a time.

---

# Don't Optimize Yet

This part is extremely important.

At this stage, **I don't care if your code is ugly**.

I don't care if:

- You used too many `div`s.
- Your CSS is repetitive.
- Your naming isn't perfect.
- You used a property that could be replaced with something cleaner.
- Your component could be structured better.
- Your CSS could be reduced.

Not yet.

Your first goal is:

> **Make the output you wanted.**

That's it.

If your solution is ugly but it works, **you learned something**.

If your solution is clean but you copied it without understanding it, you learned almost nothing.

So first:

```text
Make it work.
```

Then:

```text
Understand why it works.
```

Then:

```text
Improve it.
```

Then:

```text
Optimize it.
```

That's the order.

---

# Then Comes Optimization

Once you've completed the entire UI, now we can go back.

Now you can ask:

- Can I remove unnecessary CSS?
- Can I simplify the selectors?
- Am I using the correct layout system?
- Can I make the component structure cleaner?
- Can I reuse something?
- Am I using the right semantic HTML?
- Can I make the CSS more maintainable?
- Can I improve responsiveness?
- Is there a better way to achieve the same result?

**This is where optimization belongs.**

Not at the beginning.

If you try to write perfect code before you understand what you're building, you'll spend more time worrying about the code than actually learning.

---

# The Real Challenge

The actual challenge isn't:

> "Can you build this UI?"

The real challenge is:

> **"Can you figure out how to build this UI without someone handing you the solution?"**

That's what I want you to practice.

You can get the answer wrong.

You can write terrible CSS.

You can spend 30 minutes fighting with Flexbox.

You can break the entire layout.

That's fine.

Try again.

Because every time you solve one of these problems, you're building a mental connection.

```text
Requirement
     ↓
What am I trying to achieve?
     ↓
What is controlling this?
     ↓
Which concept do I need?
     ↓
Experiment
     ↓
Result
     ↓
Why did it behave like this?
     ↓
Adjust
     ↓
Solve
```

That process is more valuable than memorizing 100 CSS properties.

---

# And This Is Where You Start Growing

At the beginning, you're going to think:

> "How the hell do I build this?"

Then after solving it once:

> "Okay, I understand this."

Then you build something similar again:

> "Oh, I know what concept I need here."

Then again:

> "I've seen this pattern before."

And eventually:

> "I don't even need to think about it anymore."

You just build it.

That's how fundamentals become intuition.

And that's what we're trying to create here.

---

# Even With AI

And this is where AI becomes interesting.

You don't have to stop using AI.

Use it.

Ask it questions.

Challenge it.

Give it your code.

Ask it why something is happening.

Ask for hints.

Ask it to explain a concept.

But the important thing is:

> **You should know what you're asking.**

If AI gives you:

```tsx
<div className="flex justify-between items-center">
```

you shouldn't just think:

> "Cool, it works."

You should be able to think:

> "Okay, I understand why this parent needs a flex layout, why the children need to be distributed, and what those classes are doing."

That's the difference.

If you understand **what and why**, AI becomes a tool.

If you don't understand **what and why**, AI becomes a crutch.

And we don't want that.

---

# Your Challenge Flow

So from this point forward, follow this order:

```text
1. Draw the section
        ↓
2. Understand the requirement
        ↓
3. Build the HTML structure
        ↓
4. Identify the layout problem
        ↓
5. Find the CSS concept
        ↓
6. Experiment yourself
        ↓
7. Use borders to debug
        ↓
8. Get the output working
        ↓
9. Understand why it works
        ↓
10. Move to the next section
        ↓
11. Finish the whole UI
        ↓
12. Come back and optimize
```

Don't skip steps just because you want to finish faster.

---

# Final Thought

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

# **Build the skeleton.**

And then build it again.

And again.

And again.

Because eventually, the thing you were struggling to understand becomes something you don't even have to think about anymore.

You just **build.**

And even when you use AI, you know **what you're asking, why you're asking it, and where that answer fits into your architecture.**

That's the special part.

That's the growth.

And yeah...

Even if you don't like struggling with it,

**you don't really have much of a choice. 😂**

You have to do it.

So...

**Go build.**