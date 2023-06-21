# Use the official Rasa Docker image as the base image
FROM rasa/rasa:2.8.0-full

# Copy your Rasa project into the container
COPY . /app

# Switch to the app directory
WORKDIR /app

# Expose the Rasa server port
EXPOSE 5005

# Set the command to start the Rasa server
CMD ["run", "--enable-api", "--cors", "*", "--debug"]
