# Use the official Rasa Docker image as the base image
FROM rasa/rasa:2.8.0-full

# Enable QEMU for ARM64 builds on Linux-based hosts
RUN [ "cross-build-start" ]

# Copy your Rasa project into the container
COPY . /app

# Switch to the app directory
WORKDIR /app

# Train the Rasa models during the image build
RUN rasa train

# Expose the Rasa server port
EXPOSE 5005

# Set the command to start the Rasa server
CMD ["run", "--enable-api", "--cors", "*", "--debug"]

# Disable QEMU for ARM64 builds on Linux-based hosts
RUN [ "cross-build-end" ]
