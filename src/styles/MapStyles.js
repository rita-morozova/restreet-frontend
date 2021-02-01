const mapStyles =[
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 65,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: "50",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        hue: "#8500ff",
      },
      {
        saturation: "100",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        lightness: "30",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        hue: "#ff00e4",
      },
      {
        saturation: "59",
      },
      {
        lightness: "-9",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        lightness: "40",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        hue: "#9500ff",
      },
      {
        saturation: "100",
      },
      {
        lightness: "7",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        hue: "#a500ff",
      },
      {
        saturation: "100",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#ff00c7",
      },
      {
        saturation: "100",
      },
    ],
  },
  {
    featureType: "transit.station.rail",
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: "100",
      },
      {
        hue: "#ff008d",
      },
    ],
  },
  {
    featureType: "transit.station.rail",
    elementType: "labels.icon",
    stylers: [
      {
        hue: "#ff00bc",
      },
      {
        saturation: "80",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ffff00",
      },
      {
        lightness: -25,
      },
      {
        saturation: -97,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        hue: "#8400ff",
      },
      {
        visibility: "on",
      },
      {
        saturation: "31",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        lightness: -25,
      },
      {
        saturation: -100,
      },
    ],
  },
];

export default mapStyles
