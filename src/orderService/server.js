const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const topicName = "orderCreated";

const processProducer = async () => {
  const producer = kafka.producer();
  await producer.connect();
  for (let i = 1; i < 6; i++) {
    let msg = JSON.stringify({ customerId: "SHOP-" + i, orderId: i });
    await producer.send({
      topic: topicName,
      messages: [{ value: msg }],
    });
  }
};

processProducer().then(() => {
  console.log("done processing orders");
  process.exit();
});
