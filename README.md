# **Group 10 - Discoverability of Reusable Scenarios**

## 🎯 Task
**G10, you will focus on making reusable steps and scenarios easily discoverable by users.**

1. Scenario Search Engine:
- Implement a search engine within the interface where users can find reusable scenarios or steps by keywords (example: "pick", "place", "move").
- Provide filters and sorting options (example: most used, most recent or category-based) to help users quickly find relevant scenarios.

2. Usage suggestions:
- Develop a suggestion system that recommends reusable existing scenarios or steps while users are writing new ones, based on their current task or previous history.

![image](https://github.com/user-attachments/assets/5ddae1e9-d795-47de-a868-dcd8370be14c)


## 🔰 Issues
Please refer to the [Issue Board](https://github.com/monikafabianova/WebBasedBDD/issues), select a task you are comfortable working on and assign it to yourself.


## 🧲 Pull requests
When you are done with your issue, create a pull request and ask anyone of us to review it. After that, it will be merged to the MAIN.

## Examples

These entities should be put in the "Entities" editor for testing if Scenarios from Library work correctly.

There also needs to be `model robotic_domain` at the top of **"Entities"** editor and `model sample using robotic_domain` at the top of **"Scenarios"** editor

```// example 1
declarative entity robot {
actions: moves, grabs, releases
properties: position
}
declarative entity object {
states: grabbed, released
}

// example 2
declarative entity robot {
actions: moves, picks, releases
properties: position
}
declarative entity object {
states: sensed, sorted
}
declarative entity sensor {
states: active, inactive
}

// example 3
declarative entity robot {
actions: moves, picks, releases
properties: position, speed
}
declarative entity output {
states: ON, OFF
actions: activates, deactivates
properties: position
}
declarative entity button {
states: ON, OFF
properties: signal
}
declarative entity gripper {
states: open, closed
actions: opens, closes
}```
