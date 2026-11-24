import technicianVan from "../assets/technician-van.jpg";
import acCondenser from "../assets/ac-condenser.jpg";
import plumberSink from "../assets/plumber-sink.jpg";
import smartThermostat from "../assets/smart-thermostat.jpg";
import tanklessWaterHeater from "../assets/tankless-water-heater.jpg";
import teamWithVan from "../assets/team-with-van.jpg";

export const images = {
  technicianVan,
  acCondenser,
  plumberSink,
  smartThermostat,
  tanklessWaterHeater,
  teamWithVan,
};

export const business = {
  name: "Lone Star Comfort",
  tagline: "HVAC & Plumbing",
  phone: "(512) 555-0190",
  phoneHref: "tel:+15125550190",
  email: "service@lonestarcomfortaustin.com",
  area: "Austin, TX",
  areas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Lakeway & Buda"],
  hours: [
    { day: "Monday – Saturday", time: "7:00 AM – 8:00 PM" },
    { day: "Sunday", time: "24/7 Emergency Service" },
  ],
};

export const navLinks = [
  { label: "Home", path: "#/" },
  { label: "Services", path: "#/services" },
  { label: "About Us", path: "#/about" },
  { label: "Contact", path: "#/contact" },
];

export const serviceTypes = [
  "AC Repair",
  "Heating",
  "Plumbing",
  "Water Heater",
  "Maintenance",
] as const;

export const highlights = [
  { icon: "shield", label: "Licensed & Insured" },
  { icon: "clock", label: "24/7 Emergency Service" },
  { icon: "badge", label: "100% Satisfaction Guarantee" },
] as const;
