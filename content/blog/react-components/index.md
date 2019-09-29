---
title: How I Use React Components
date: "2019-09-27T00:00:00.000Z"
description: My approach to building React components
---

When building the frontend of a web application using React, it is sometimes difficult to determine how to organize React components. React's component API isn't opinionated in such a way to guide developers toward a "correct" way to scope component functionality. When adding functionality to an app, it's up to the developer to decide whether the new functionality is best implemented as a new component or as an addition to an existing component.

## What I Optimize For

The number one thing I optimize for when building applications is developer experience. Having built several production-grade React applications, I've found it's rare to require optimization at the component level (most of my application performance bottlenecks tend to pop up in the backend or API layer). Addressing bottlenecks when they surface is much easier for me when I have already focused on developer experience. Premature optimization based on speculation about what _might_ be slow often leads to a codebase that is less intuitive and harder to follow.

My method of component organization helps to optimize for a codebase that is easier to follow and maintain. Components lend themselves fairly easily to reuse, often across different contexts.

## My approach
