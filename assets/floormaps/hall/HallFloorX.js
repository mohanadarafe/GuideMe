import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import Svg, { G, Path, Text, Use, Symbol, Defs, Rect, Circle } from "react-native-svg";
import { HallClass } from "./HallClassrooms/HallClass";
import { IndoorScenario } from "../../../components/IndoorDirections/IndoorScenario.js";

export function HallFloorX(props) {
  const [floorNumber, setFloorNumber] = React.useState("");
  const to = props.to;
  const from = props.from;
  const mobility = props.mobility;

  const floorSelected = async () => {
    let name = await AsyncStorage.getItem("floorSelected");
    setFloorNumber(name);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      floorSelected();
    }, 1);
    return () => clearInterval(intervalId);
  });

  return (
    <Svg width={1024} height={1024}>
      <Defs>
        <Symbol id="prefix__a" viewBox="0 0 515 400">
          <Path d="M218.2 69.69c18.75 0 33.92-15.17 33.9-33.9.02-18.7-15.15-33.88-33.9-33.9-18.68.03-33.85 15.2-33.9 33.9.05 18.73 15.22 33.9 33.9 33.9" />
          <Path d="M251.8 130.7v-21.3c-.02-45.55-67.11-45.05-67.1 0v87.1h.1l-63.4 63.4c-5.95 5.93-6.68 6.19-18.4 6.2H64.2c-38.98-.01-62.37 35.04-62.4 64.8.03 29.66 23.42 67.22 65.9 67.2 0 0 52.72.03 69 0 16.31.03 36.07-6.2 52.4-21.5L391.2 175c4.31-3.8 6.71-5 14.1-5h50c23.98 0 57.98-27.22 58-66.5-.03-38.82-34.28-64.72-60-64.8h-78.8c-16.33-.01-37.28 6.65-49.8 19.2l-72.9 72.8" />
          <Path
            fill="#fff"
            d="M379.2 72.19h70.9c17.22.04 28.82 19.32 28.8 30.8.03 11.53-8.21 32.99-29.3 33H407c-18.08-.01-26.08 2.53-36.5 12.9l-203.6 203.7c-8.28 8.25-18.74 11.52-32.2 11.5H67.6c-17.28.02-32.48-14.58-32.5-33.7.02-19.22 14.52-29.96 29.5-30h46.1c13.42.04 22.25-3.79 29.9-11.5l207.1-207.1c8.56-8.5 16.98-9.56 31.5-9.6"
          />
        </Symbol>
      </Defs>
      <Path fill="none" d="M-1-1h1026v1026H-1z" />
      <G>
        <G stroke="#000" strokeWidth={2.55}>
          <Path
            fill="#f7d6d6"
            strokeWidth={1.9996216000000002}
            d="M10.955 52.585h1002.963V972.58H10.955z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M10.955 52.585h139.943v102.658H10.955z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M150.896 52.585h89.269v135.479h-89.269zM240.165 52.585h98.196v135.479h-98.196zM338.361 52.585h81.917v54.873h-81.917zM357.79 107.458h62.488v39.909H357.79zM357.79 147.367h62.488v40.697H357.79zM420.278 52.585h93.996v135.479h-93.996zM596.454 52.585h97.671v135.479h-97.671z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M694.124 52.585h81.917v135.479h-81.917zM875.288 52.584v105.023h-27.831v30.456h-71.415V52.584h99.246zM875.288 52.585h138.63v134.954h-138.63z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M875.288 187.537h138.63v97.145h-138.63zM875.288 284.684h138.63v84.543h-138.63z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M875.288 369.227h138.63v97.145h-138.63zM875.288 466.372h138.63v84.543h-138.63zM875.288 550.915h138.63v95.57h-138.63zM875.288 646.485h138.63v92.944h-138.63zM874.764 829.224h139.154V972.58H874.764zM783.919 829.224h90.845V972.58h-90.845zM691.5 829.224h92.419V972.58h-92.42zM598.554 829.224h92.944V972.58h-92.944zM425.792 828.7h87.169v143.88h-87.17z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M327.072 828.7h98.721v143.88h-98.72zM244.104 828.7h82.968v143.88h-82.968zM144.858 828.7h99.246v143.88h-99.246zM10.955 828.7h133.903v143.88H10.955zM10.955 781.964h74.04V828.7h-74.04zM10.955 735.229h94.52v46.735h-94.52z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M105.474 735.229h45.684v59.337h-45.684z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M10.955 643.86H151.16v91.37H10.955zM10.955 551.44H151.16v92.42H10.955zM10.955 463.221H151.16v88.219H10.955zM10.955 371.326H151.16v91.895H10.955z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M10.955 281.008H151.16v90.32H10.955zM10.955 155.243h114.474v35.445H10.955z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M151.16 281.008v-69.315h-25.731V190.69H10.954v90.319H151.16zM903.644 829.224v-25.73h-27.306l-1.05-64.064h138.63v89.794H903.643zM205.245 243.2h91.37v132.854h-91.37zM296.615 243.2H460.45v90.845H296.615z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M373.806 243.2h50.411v50.412h-50.41zM296.615 334.044h32.032v42.008h-32.032zM328.647 334.044h33.082V368.7h-33.082zM361.729 334.044h29.406V368.7H361.73zM460.45 334.044h53.562v40.433H460.45zM460.45 297.81h53.562v36.234H460.45z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M460.45 258.953h53.562v38.86H460.45zM391.135 334.044h69.315v40.433h-69.315zM423.167 425.938h36.758V713.7h-36.758zM459.925 669.591h55.662v44.11h-55.662zM330.222 425.938h92.944V555.64h-92.944z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M280.337 425.938h49.886v84.018h-49.886zM280.337 509.956h49.886v45.684h-49.886zM214.173 468.998h50.41v40.958h-50.41zM214.173 425.938h50.41v43.06h-50.41z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M280.337 555.904v-28.619h-15.229l-.525-17.328h-50.41v45.947h66.164zM278.76 674.317h53.036v96.62h-53.035z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M214.173 674.317h64.59v96.62h-64.59zM214.173 555.904v84.805h77.716v-10.502h38.596v-74.566l-116.312.263zM330.485 555.641v102.397h25.993v15.49h66.689V555.642h-92.682zM214.173 640.71h77.716v33.607h-77.716zM331.798 735.095h61.259v35.842h-61.26zM423.167 713.7v38.476h56.404v17.823h36.389l-.373-56.3h-92.42z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M393.056 735.096v-61.567h-36.578v24.807h-24.68v36.76h61.258zM596.533 243.853h95.056v131.443h-95.056z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M613.783 243.853h17.33v18.776h-17.33zM691.59 243.853h52.945v131.443h-52.946z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M744.535 243.853h70.628V346.91h-70.628z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M744.535 346.909h70.628v28.387h-70.628zM757.139 432.24h57.5v59.862h-57.5z"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.94062}
            d="M596.537 375.293v173.531H775.88v-56.719h-18.75V432.23h18.75v-56.937H596.537z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M694.124 548.815h122.875v126.027H694.124z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M694.124 674.842h53.562v95.833h-53.562z"
          />
          <Path
            fill="#da3636"
            strokeWidth={1.9996216000000002}
            d="M747.686 674.842H817v95.833h-69.315zM652.64 674.842h41.484v95.833H652.64zM596.534 375.296v268.829M596.533 644.125h36.76v63.494h-36.76zM596.533 707.62h36.76v32.336h-36.76zM596.533 739.956h36.76v30.72h-36.76zM652.64 674.842h-19.346M694.124 548.815h-97.59M757.138 492.103l-33.616 56.712M757.138 432.24l-34.359-56.944M514.011 424.888v188.047"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.94062}
            d="M291.88 630.2V674.323H331.788v24h24.687v-40.281h-26v-27.844h-38.593zM596.537 548.824v95.313h36.75v30.718h60.844V548.824h-97.594z"
          />
        </G>
        <Text
          stroke="#000"
          transform="matrix(.75495 0 0 .74496 106.933 54.812)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={16}
          y={310}
          x={475.019}
          strokeWidth={0}
        >
          {"H" + floorNumber + "06.01"}
        </Text>
        <Path
          stroke="#000"
          d="M286.156 745.435l7.024-.052.046-8.225h6.99v-8.275h7.17v-8.073h7.081v-8.073H325v4.037h-6.993v8.174h-7.08v8.174h-7.082v8.174h-7.17v8.275h-10.62c.157-1.337-.27-2.845.1-4.136h0zM699.165 745.435l7.024-.052.046-8.225h6.99v-8.275h7.17v-8.073h7.081v-8.073h10.533v4.037h-6.992v8.174h-7.082v8.174h-7.08v8.174h-7.17v8.275h-10.622c.158-1.337-.269-2.845.102-4.136h0zM697.165 323.426l7.024-.052.046-8.225h6.99v-8.275h7.17v-8.073h7.081v-8.073h10.533v4.036h-6.993v8.174h-7.08v8.174h-7.082v8.175h-7.17v8.274h-10.62c.157-1.337-.27-2.844.1-4.135h0z"
          strokeWidth={1.5}
          fill="#fff"
        />
        <Text
          stroke="#000"
          transform="matrix(1.05592 0 0 1.04792 28.615 -35.532)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={10}
          y={768.26}
          x={75.19}
          strokeWidth={0}
        >
          {"H" + floorNumber + "51.01"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={176}
          y={910.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "47"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={60}
          y={911.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "49"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={266}
          y={912.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "45"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={357}
          y={912.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "43"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={452}
          y={912.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "41"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={625}
          y={913.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "37"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={717}
          y={914.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "35"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={811}
          y={914.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "33"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={929}
          y={915.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "31"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={929}
          y={789.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "29"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={928}
          y={701.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "29"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={929}
          y={607.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "27"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={929}
          y={513.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "25"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={927}
          y={425.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "23"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={927}
          y={333.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "21"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={927}
          y={243.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "19"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={926}
          y={127.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "17"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={808}
          y={129.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "15"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={718}
          y={128.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "13"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={631}
          y={127.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "11"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={451}
          y={129.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "07"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={351}
          y={88.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "05.03"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={360}
          y={134.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "05.02"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={360}
          y={176.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "05.01"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={271}
          y={129.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "03"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={179}
          y={129.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "01"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={59}
          y={112.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "67"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={45}
          y={180.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "65"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={59}
          y={247.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "63"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={60}
          y={335.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "61"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={59}
          y={427.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "59"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={58}
          y={517.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "57"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={56}
          y={608.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "55"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={57}
          y={697.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "53"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={26}
          y={765.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "51.02"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={17}
          y={813.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "51.03"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={616}
          y={623.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "32.06"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={737}
          y={623.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "22"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={675}
          y={475.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "20"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={762}
          y={370.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "86"}
        </Text>
        <Path
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
          strokeOpacity="null"
          strokeLinejoin="null"
          strokeLinecap="null"
          d="M747 679.8l69 95M743 348.8l70-101M747 773.8l69-95M743 246.8l70 103"
        />
        <Text
          stroke="#000"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={24}
          y={732.235}
          x={419.171}
          strokeWidth={0}
        >
          {"H" + floorNumber + "42"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={24}
          y={709.176}
          x={250.088}
          strokeWidth={0}
        >
          {"H" + floorNumber + "54"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={24}
          y={808}
          x={223.717}
          strokeWidth={0}
        >
          {"H" + floorNumber + "52"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={24}
          y={814.588}
          x={315.239}
          strokeWidth={0}
        >
          {"H" + floorNumber + "77"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={24}
          y={728.941}
          x={515.347}
          strokeWidth={0}
        >
          {"H" + floorNumber + "40"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={24}
          y={962.824}
          x={392.801}
          strokeWidth={0}
        >
          {"H" + floorNumber + "81"}
        </Text>
        <Path
          fill="#fff"
          stroke="#000"
          strokeWidth={1.5}
          strokeOpacity="null"
          fillOpacity="null"
          d="M398.446 258.68c1.767 0 3.202-1.377 3.202-3.075 0-1.698-1.435-3.075-3.202-3.075-1.77 0-3.205 1.377-3.205 3.075 0 1.698 1.435 3.074 3.205 3.074zm8.98 13.257l-2.873-10.232a1.261 1.261 0 00-.11-.263c-.327-.959-1.264-1.653-2.371-1.653h-7.274c-1.154 0-2.123.754-2.409 1.777-.019.045-.035.092-.05.14l-2.822 10.231c-.188.671.227 1.36.927 1.54.698.18 1.416-.218 1.604-.888l2.217-8.037h.924l-4.023 14.54h3.79v10.04c0 .772.652 1.398 1.457 1.398.803 0 1.456-.625 1.456-1.398v-10.04h1.158v10.04c0 .772.652 1.398 1.458 1.398.803 0 1.456-.625 1.456-1.398v-10.04h3.789l-4.038-14.54h.948l2.257 8.037c.188.67.906 1.068 1.605.889.697-.18 1.112-.87.925-1.541h0z"
        />
        <Path
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
          strokeOpacity="null"
          strokeLinejoin="null"
          strokeLinecap="null"
          d="M236 247v133M206 285h89M204 246l32 38M295 247l-58 39M235 246l-29 40M236 246l59 40M204 380l33-95M237 379l-33-93"
        />
        <Path
          d="M243.189 349.089c2.701-.02 5.403-.038 8.104-.057l.054-8.894h8.066v-8.949h8.272v-8.73h8.17v-8.731h12.154v4.365h-8.068v8.84h-8.17v8.84H263.6v8.84h-8.273v8.948h-12.255c.182-1.446-.31-3.076.117-4.472h0z"
          strokeWidth={1.5}
          fill="#fff"
          stroke="#000"
        />
        <Path
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
          strokeOpacity="null"
          strokeLinejoin="null"
          strokeLinecap="null"
          d="M212 675.8l66 96M213 771.8l63-95"
        />
        <Text
          stroke="#000"
          strokeWidth={0}
          x={654.043}
          y={730.321}
          fontSize={10}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "32.02"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={594.261}
          y={681.408}
          fontSize={10}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "32.05"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={594.261}
          y={729.234}
          fontSize={10}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "32.03"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={595.348}
          y={759.669}
          fontSize={10}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "32.01"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={453.305}
          y={741.191}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "38"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={462.001}
          y={698.8}
          fontSize={14}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "38.01"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.75495 0 0 .74496 104.933 89.812)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={16}
          y={310}
          x={475.019}
          strokeWidth={0}
        >
          {"H" + floorNumber + "06.02"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.75495 0 0 .74496 105.933 128.812)"
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={16}
          y={310}
          x={475.019}
          strokeWidth={0}
        >
          {"H" + floorNumber + "06.03"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={357}
          y={497.8}
          fontSize={16}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "62"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={217}
          y={453.8}
          fontSize={12}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "60.01"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={215}
          y={495.8}
          fontSize={12}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "60.03"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={223}
          y={541.8}
          fontSize={12}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "60.05"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={283}
          y={541.8}
          fontSize={12}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "60.06"}
        </Text>
        <Text
          stroke="#000"
          strokeWidth={0}
          x={284}
          y={474.8}
          fontSize={12}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
        >
          {"H" + floorNumber + "60.04"}
        </Text>
        <G
          transform="matrix(.07426 0 0 .06585 325.137 453.73)"
          strokeLinecap="square"
          strokeLinejoin="round"
        >
          <Rect
            strokeWidth={1.6}
            ry={36.481}
            y={-1579.974}
            x={520.951}
            height={297.499}
            width={299.184}
            rx={36.481}
          />
          <Path
            fill="#fff"
            strokeWidth={1.6}
            d="M563.089-1538.257H779.26v214.907H563.089z"
          />
          <G stroke="#000">
            <Path
              strokeWidth={1.6}
              d="M664.32-1701.844a17.517 17.71 0 11-26.706 19.55M616.152-1622.872a20.001 18.737 0 11-35.109 2.276M583.584-1760.465a16.528 15.264 0 0129.584-2.527"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={1636.635}
              y={-673.157}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={873.171}
              y={1567.602}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M561.46-1681.74a17.511 18.153 0 11-25.582-21.06"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={1610.353}
              y={574.254}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G stroke="#000200" transform="rotate(-179.83 362.697 338.413)">
            <Path
              strokeWidth={1.6}
              d="M46.794 2341.313a17.517 17.71 0 11-26.707 19.55M-1.374 2420.284a20.001 18.737 0 11-35.11 2.276M-33.942 2282.692a16.528 15.264 0 0129.584-2.528"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={-1862.199}
              y={1428.128}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={-1845.332}
              y={-1501.439}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M-56.066 2361.417a17.511 18.153 0 11-25.582-21.061"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={-2438.783}
              y={-30.547}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M601.807-1509.27a13.906 14.327 0 11-.043.026l7.04 12.355-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={577.2}
              y={-1478.769}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={588.999}
              y={-1419.775}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={610.167}
              y={-1419.59}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M667.853-1509.296a13.906 14.327 0 11-.043.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={643.456}
              y={-1478.795}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={654.834}
              y={-1419.59}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={675.903}
              y={-1419.59}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M734.011-1509.296a13.906 14.327 0 11-.043.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={709.193}
              y={-1478.795}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={720.991}
              y={-1420.011}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={742.061}
              y={-1419.59}
              ry={9.06}
            />
          </G>
        </G>
        <G
          transform="matrix(.07426 0 0 .06585 325.137 453.73)"
          strokeLinecap="square"
          strokeLinejoin="round"
        >
          <Rect
            strokeWidth={1.6}
            ry={36.481}
            y={-1579.974}
            x={102.281}
            height={297.499}
            width={299.184}
            rx={36.481}
          />
          <Path
            fill="#fff"
            strokeWidth={1.6}
            d="M144.419-1538.257H360.59v214.907H144.419z"
          />
          <G stroke="#000">
            <Path
              strokeWidth={1.6}
              d="M245.65-1701.844a17.517 17.71 0 11-26.707 19.55M197.482-1622.872a20.001 18.737 0 11-35.11 2.276M164.914-1760.465a16.528 15.264 0 0129.584-2.527"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={1368.214}
              y={-995.761}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={1140.383}
              y={1246.585}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M142.79-1681.74a17.511 18.153 0 11-25.582-21.06"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={1606.228}
              y={155.576}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G stroke="#000200" transform="rotate(-179.83 362.697 338.413)">
            <Path
              strokeWidth={1.6}
              d="M465.463 2340.079a17.517 17.71 0 11-26.707 19.55M417.294 2419.05a20.001 18.737 0 11-35.109 2.276M384.726 2281.458a16.528 15.264 0 0129.584-2.528"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={-1592.832}
              y={1749.945}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={-2111.593}
              y={-1179.632}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M362.602 2360.183a17.511 18.153 0 11-25.582-21.061"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={-2433.424}
              y={388.125}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M183.137-1509.27a13.906 14.327 0 11-.043.026l7.04 12.355-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={158.53}
              y={-1478.769}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={170.328}
              y={-1419.775}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={191.497}
              y={-1419.59}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M249.183-1509.296a13.906 14.327 0 11-.043.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={224.786}
              y={-1478.795}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={236.164}
              y={-1419.59}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={257.233}
              y={-1419.59}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M315.34-1509.296a13.906 14.327 0 11-.042.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={290.522}
              y={-1478.795}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={302.321}
              y={-1420.011}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={323.391}
              y={-1419.59}
              ry={9.06}
            />
          </G>
        </G>
        <Use
          x={2298.318}
          y={-2360.53}
          transform="matrix(.04757 0 0 .06771 353.073 653.876)"
          xlinkHref="#prefix__a"
        />
        <Path
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
          strokeOpacity="null"
          strokeLinejoin="null"
          strokeLinecap="null"
          d="M459.538 426.23h53.846M514.153 611.23h-54.615"
        />
        <Path
          stroke="#000"
          fill="#fff"
          strokeWidth={1.5}
          strokeOpacity="null"
          fillOpacity="null"
          d="M643.999 284.927c0-2.81 2.623-5.086 5.862-5.086 3.24 0 5.863 2.276 5.863 5.086 0 2.81-2.624 5.085-5.863 5.085-3.239 0-5.862-2.276-5.862-5.085zm19.711 14.395v-2.569c0-2.702-2.524-4.893-5.64-4.893h-16.435c-3.115 0-5.64 2.191-5.64 4.893v2.569c-.006.058-.01.118-.01.179v14.792c0 1.15 1.074 2.081 2.399 2.081 1.323 0 2.4-.931 2.4-2.08V299.72h1.608v16.656h.012v23.534c0 1.53 1.432 2.773 3.198 2.773s3.198-1.241 3.198-2.773v-23.534h2.11v23.534c0 1.53 1.433 2.773 3.197 2.773 1.767 0 3.198-1.241 3.198-2.773v-23.534h.01V299.72h1.609v14.573c0 1.15 1.076 2.081 2.4 2.081 1.325 0 2.398-.932 2.398-2.081V299.5c0-.062-.006-.12-.012-.178h0z"
        />
        <G >
          <G transform="matrix(.04546 0 0 .0442 400.218 515.875)">
            <Circle r={38.178} cy={-6033.242} cx={4905.53} />
            <Path d="M4930.519-5964.826l-27.853-4.123s-32.868-39.11-34.173-40.625a34.996 34.996 0 00-7.391-6.065c-16.48-10.103-38.03-4.934-48.132 11.544l-37.832 61.706c-9.746 15.895-5.278 36.503 9.838 47.012v86.955c0 11.046 8.954 20 20 20s20-8.954 20-20v-86.96a34.861 34.861 0 009.838-10.42l34.498-56.267 14.004 16.744a15.005 15.005 0 009.31 5.215l33.5 4.96c.745.11 1.484.164 2.215.164 7.313 0 13.717-5.355 14.82-12.805 1.213-8.195-4.446-15.822-12.642-17.035zM5003.226-5981.321h-36.158a1.949 1.949 0 00-1.838-.945 1.934 1.934 0 00-1.487.945h-31.852a5 5 0 00-2.945 9.04l54.894 40.016a4.996 4.996 0 002.945.959h16.44a5 5 0 005-5v-40.015a5 5 0 00-5-5zM4940.408-6005.055a1.938 1.938 0 100 3.876c.713 0 1.437.033 2.149.098a1.938 1.938 0 10.353-3.862 28.314 28.314 0 00-2.502-.112zM4958.045-5993.034c.383.45.928.68 1.476.68a1.938 1.938 0 001.474-3.197 27.223 27.223 0 00-3.052-3.05 1.938 1.938 0 10-2.515 2.95 23.338 23.338 0 012.617 2.617zM4960.97-5988.694a23.07 23.07 0 011.439 3.404 1.941 1.941 0 002.449 1.232 1.94 1.94 0 001.232-2.45 26.962 26.962 0 00-1.681-3.977 1.937 1.937 0 10-3.438 1.79zM682.806 172.004c.077.027.152.061.224.101a.12.12 0 00.059.016c.046 0 .09-.027.113-.074a.143.143 0 00-.054-.185 1.709 1.709 0 00-.262-.12c-.067-.023-.139.016-.16.088-.023.072.013.15.08.174z" />
          </G>
          <Path
            d="M686.547 162.986h-15.181c-2.971 0-5.389 2.603-5.389 5.804v16.35c0 3.2 2.418 5.804 5.389 5.804h15.18c2.972 0 5.39-2.604 5.39-5.805v-16.35c0-3.2-2.418-5.803-5.39-5.803zm4.402 22.153c0 2.615-1.975 4.743-4.402 4.743h-15.181c-2.428 0-4.403-2.128-4.403-4.743v-16.35c0-2.614 1.975-4.742 4.403-4.742h15.18c2.428 0 4.403 2.128 4.403 4.743v16.35z"
            transform="matrix(.04546 0 0 .0442 400.218 515.875)"
          />
        </G>
        <G >
          <G transform="matrix(.05306 0 0 .0518 378.51 627.945)">
            <Circle r={38.178} cy={2441.545} cx={7620.523} />
            <Path d="M7645.512 2509.96l-27.853-4.122s-32.868-39.11-34.173-40.625a34.996 34.996 0 00-7.391-6.065c-16.48-10.103-38.03-4.934-48.132 11.544l-37.832 61.706c-9.746 15.895-5.278 36.503 9.838 47.012v86.955c0 11.046 8.954 20 20 20s20-8.954 20-20v-86.96a34.861 34.861 0 009.838-10.42l34.498-56.267 14.004 16.744a15.005 15.005 0 009.31 5.215l33.5 4.96c.745.11 1.484.164 2.215.164 7.313 0 13.717-5.355 14.82-12.805 1.213-8.195-4.446-15.822-12.642-17.035zM7718.219 2493.466h-36.158a1.949 1.949 0 00-1.838-.945 1.934 1.934 0 00-1.487.945h-31.852a5 5 0 00-2.945 9.04l54.894 40.016a4.996 4.996 0 002.945.959h16.44a5 5 0 005-5v-40.015a5 5 0 00-5-5zM7655.4 2469.732a1.938 1.938 0 100 3.876c.714 0 1.438.033 2.15.098a1.938 1.938 0 10.353-3.862 28.314 28.314 0 00-2.502-.112zM7673.038 2481.753c.383.45.928.68 1.476.68a1.938 1.938 0 001.474-3.197 27.223 27.223 0 00-3.052-3.05 1.938 1.938 0 10-2.515 2.95 23.338 23.338 0 012.617 2.617zM7675.964 2486.093a23.07 23.07 0 011.438 3.404 1.941 1.941 0 002.449 1.232 1.94 1.94 0 001.232-2.45 26.962 26.962 0 00-1.681-3.977 1.937 1.937 0 10-3.438 1.79zM7662.675 2474.773c1.167.386 2.314.87 3.406 1.438a1.938 1.938 0 101.79-3.44 27.014 27.014 0 00-3.98-1.681 1.94 1.94 0 00-1.217 3.683z" />
          </G>
          <Path
            d="M7719.593 2347.366H7488.59c-45.214 0-82 36.784-82 81.998v230.993c0 45.22 36.786 82.009 82 82.009h231.002c45.215 0 81.999-36.79 81.999-82.01v-230.992c0-45.214-36.784-81.998-82-81.998zm66.999 312.99c0 36.95-30.055 67.01-67 67.01h-231.001c-36.943 0-67-30.06-67-67.01v-230.992c0-36.943 30.057-66.998 67-66.998h231.002c36.944 0 66.999 30.055 66.999 66.998v230.993z"
            transform="matrix(.05306 0 0 .0518 378.51 627.945)"
          />
        </G>
      </G>
      <G>
        {from !== null && to !==null &&
          <IndoorScenario floor={floorNumber} from={from} to={to} building={"Hall Building"} mobility={mobility} />
        }
      </G>
      <HallClass floor={floorNumber} />
    </Svg>
  );
}