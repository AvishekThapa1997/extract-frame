# Extract Frame

Extract Frame is a video-to-image service that allows users to upload videos, extract frames from them, and download individual images.

This project is being built as a hands-on learning project to apply NestJS, AWS services, and messaging-queue concepts in a practical, production-oriented backend.

## Product Overview

The intended user workflow is:

1. A user uploads a video to the service.
2. The service stores the uploaded video in Amazon S3.
3. Amazon SQS is used to queue video-processing tasks for asynchronous execution.
4. A background worker processes the video, extracts frames, and stores the resulting images in S3.
5. The user can view the extracted frames and download any individual image they choose.

The specific frame-extraction implementation and video-processing approach will be decided and documented later.

## Planned AWS Services

- **Amazon S3:** Store uploaded videos and extracted frame images.
- **Amazon SQS:** Manage asynchronous video-processing tasks and decouple the API from background processing.

The detailed worker architecture, storage conventions, and processing strategy will be documented as they are implemented.

## Learning Objectives

This project serves as a practical learning environment for applying NestJS and backend engineering concepts, including:

- NestJS modules, controllers, providers, and dependency injection.
- DTOs, validation, exception handling, and consistent API responses.
- File uploads and AWS service integration.
- Asynchronous processing using SQS, message consumers, retries, and failure handling.
- Separation of API responsibilities from background-worker responsibilities.
- Testing, security, logging, and production-oriented application structure.

These are learning and implementation goals. Not all capabilities are implemented yet.

## Current Status

The repository is currently at the initial NestJS application stage.

The product workflow and AWS integrations described above are planned and will be implemented incrementally.

## Getting Started

### Prerequisites

- Node.js compatible with the project's dependencies
- npm

AWS credentials and S3/SQS configuration will be required once the AWS integrations are implemented.

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run start:dev
```

### Build

```bash
npm run build
```

### Run tests

```bash
npm run test
```

## Project Structure

The application is built with NestJS and TypeScript. The structure will evolve as feature modules, AWS integrations, and background-processing components are introduced.
