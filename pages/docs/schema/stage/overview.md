---
sidebar_position: 2
---

# Overview


## What is a Stage?

A "stage" in Togomak is like a mini-mission that you can define and control. It's a way to tell Togomak what specific actions to perform as part of your larger workflow, whether it's deploying an application, running tests, or any other task you need to automate.

## What can I do with a Stage?

- **Run Scripts**: You can tell a stage to execute custom scripts. These scripts can be written in languages like Bash and can perform tasks like copying files, installing software, or running commands on your local machine or in a Docker container.

- **Execute Docker Containers**: If you need to run software inside a controlled environment, you can use a stage to execute a Docker container. This allows you to isolate your software, manage dependencies, and ensure consistent execution.

- **Set Environment Variables**: You can configure stages to set specific environment variables. These variables can be used to customize how your scripts or containers behave during execution.

- **Control Flow**: Stages can be organized to run in a specific order. You can define dependencies between stages, meaning one stage can wait for another to finish before it starts.

- **Retry on Failure**: Stages can be configured to retry their tasks if they fail. You can specify how many times a stage should retry and whether it should wait for a specific duration before retrying.

- **Daemon Services**: If your task involves running a long-running service, like a web server, you can configure a stage as a "daemon" This allows the service to keep running even as other stages execute.

- **Customization**: You can give each stage a friendly name, specify the working directory where it operates, and even choose which shell or command interpreter to use.

- **Pre and Post Hooks**: You can set up stages that run before or after other stages. These pre and post hooks provide a way to prepare or clean up after a primary stage.

- **Use Macros**: You can substitute a stage with a `macro.` which is a predefined set of actions. This makes it easy to reuse common sequences of tasks.

Stages allow you to break down complex tasks into manageable steps. By defining stages, you can automate and orchestrate your workflows, ensuring consistency and reliability in your processes. You have fine-grained control over how each part of your automation behaves, making it easier to troubleshoot and maintain your automation pipelines.

