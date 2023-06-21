# Use the official Rasa Docker image as the base image
FROM rasa/rasa:main-full

# Switch to the app directory
WORKDIR /app

# Copy your Rasa project into the container
COPY . /app

# Train the Rasa models during the image build
RUN rasa train

# Expose the Rasa server port
EXPOSE 5005

# Set the command to start the Rasa server
CMD ["run", "--enable-api", "--cors", "*", "--debug"]
