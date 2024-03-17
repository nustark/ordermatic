### ordermatic
#### about
e-commerce order processing: C# with ASP.NET Core:
* build an e-commerce platform where orders are processed in real-time
* use Kafka to handle order events such as placement, payment, and fulfillment
* develop C# services with ASP.NET Core to consume order events from Kafka topics, update inventory, process payments, and send notifications to customers about order status changes
* switching to Node.js and Express

#### implementation details
* message order is only maintained within a partition so with default partitioning (round robin/spraying) and 2 partitions, overall order of messages is not maintained but order within partition is
  * **TODO**: hashing key or some custom partitioner
* **TODO**: move services to different containers for use in production

#### setup
1. `docker-compose up`
