# React Router v6: useParams Hook Error

This repository demonstrates a common error when using the `useParams` hook in React Router v6 and provides the correct solution.

## Problem

The `useParams` hook in React Router v6 needs to be used inside a component that is rendered within a `<Route>` component.  Using it outside a Route will result in an error indicating that the hook is not available in that context.

## Solution

Ensure that the component using `useParams` is wrapped within a `<Route>` component. This gives the hook access to the routing context and allows it to correctly extract parameters from the URL.

## Usage

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.