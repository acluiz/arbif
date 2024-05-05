import { Simulation } from "./Simulation";
import { Softlead } from "./Softlead";

export const STEPS = {
  simulation: {
    name: "simulation",
    number: 1,
    title: "Quanto você precisa?",
    content: <Simulation />,
  },
  softlead: {
    name: "softlead",
    number: 2,
    title: "Suas informações",
    content: <Softlead />,
  },
};
