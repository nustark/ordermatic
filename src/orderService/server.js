const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const topicName = "orderCreated";

const msg = JSON.stringify({ customerId: 1, orderId: 1 });
const processProducer = async () => {
  const producer = kafka.producer();
  await producer.connect();
  for (let i = 0; i < 3; i++) {
    // partitions chosen will be determined by default (round robin by Kafka)
    await producer.send({
      topic: topicName,
      messages: [{ value: msg }],
    });
  }
};

processProducer().then(() => {
  console.log("done");
  process.exit();
});
