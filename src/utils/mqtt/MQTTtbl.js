import { useEffect, useState } from "react";
import mqtt from "../../../node_modules/mqtt/dist/mqtt";

const MQTTtbl = (topic) => {
  const [data100, setData100] = useState();
  const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

  const connectUrl = `wss://${process.env.REACT_APP_BASE_HOST_MQTT}:${process.env.REACT_APP_BASE_PORT_MQTT}`;
  // useEffect(() => {
  useEffect(() => {
    const client = mqtt.connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      username: `${process.env.REACT_APP_BASE_USERNAME_MQTT}`,
      password: `${process.env.REACT_APP_BASE_PASSWORD_MQTT}`,
      reconnectPeriod: 1000,
      ca: process.env.REACT_APP_BASE_PORT_CERT,
      keyPath: process.env.REACT_APP_BASE_CLIENT_KEY_MQTT,
      certPath: process.env.REACT_APP_CLIENT_CERT_MQTT,
      rejectUnauthorized: false,
      protocol: "wss",
    });
    client.on("connect", () => {
      // console.log("connect");
      client.subscribe([topic], () => {});
      // client.publish(topic, "Hello mqtt" )
    });
    client.on("message", (topic, payload) => {
      const data = payload.toString();
      setData100(JSON.parse(data));
    });
    // client.on('close', () => {
    //   console.log('close');
    // })
    return () => {
      client.unsubscribe(topic);
      client.end();
    };
  }, []);

  // client.on("disconnect", () => {
  //   client.subscribe([topic], () => {
  //   });
  // });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return { data100 };
};

export default MQTTtbl;
