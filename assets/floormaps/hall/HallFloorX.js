import React, { useEffect, useState } from "react"
import { AsyncStorage } from "react-native";
import Svg, { G, Path, Text, Rect, Use, Symbol, Defs, Line } from "react-native-svg"
import { HallClass } from "./HallClassrooms/HallClass";
import { DirectionPathFinding } from "../../../components/Directions/DirectionPathFinding";

export function HallFloorX() {
  const [floorNumber, setFloorNumber] = React.useState("");

  const floorSelected = async () => {
    let name = await AsyncStorage.getItem("floorSelected");
    setFloorNumber(name);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      floorSelected();
    }, 100);
    return () => clearInterval(intervalId);
  })

  return (
    <Svg width={1024} height={1024}>
      <Defs>
        <Symbol viewBox="0 0 515 400" id="prefix__a">
          <Path d="M218.2 69.69c18.75 0 33.92-15.17 33.9-33.9.02-18.7-15.15-33.88-33.9-33.9-18.68.03-33.85 15.2-33.9 33.9.05 18.73 15.22 33.9 33.9 33.9" />
          <Path d="M251.8 130.7v-21.3c-.02-45.55-67.11-45.05-67.1 0v87.1h.1l-63.4 63.4c-5.95 5.93-6.68 6.19-18.4 6.2H64.2c-38.98-.01-62.37 35.04-62.4 64.8.03 29.66 23.42 67.22 65.9 67.2 0 0 52.72.03 69 0 16.31.03 36.07-6.2 52.4-21.5L391.2 175c4.31-3.8 6.71-5 14.1-5h50c23.98 0 57.98-27.22 58-66.5-.03-38.82-34.28-64.72-60-64.8h-78.8c-16.33-.01-37.28 6.65-49.8 19.2l-72.9 72.8" />
          <Path
            d="M379.2 72.19h70.9c17.22.04 28.82 19.32 28.8 30.8.03 11.53-8.21 32.99-29.3 33H407c-18.08-.01-26.08 2.53-36.5 12.9l-203.6 203.7c-8.28 8.25-18.74 11.52-32.2 11.5H67.6c-17.28.02-32.48-14.58-32.5-33.7.02-19.22 14.52-29.96 29.5-30h46.1c13.42.04 22.25-3.79 29.9-11.5l207.1-207.1c8.56-8.5 16.98-9.56 31.5-9.6"
            fill="#fff"
          />
        </Symbol>
      </Defs>
      <Path fill="none" d="M-1-1h2050.013v2050.013H-1z" />
      <G>
        <G strokeWidth={2.55} stroke="#000">
          <Path
            strokeWidth={1.9996216000000002}
            fill="#f7d6d6"
            d="M10.955 52.585h1002.963V972.58H10.955z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M10.955 52.585h139.943v102.658H10.955z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M150.896 52.585h89.269v135.479h-89.269zM240.165 52.585h98.196v135.479h-98.196zM338.361 52.585h81.917v54.873h-81.917zM357.79 107.458h62.488v39.909H357.79zM357.79 147.367h62.488v40.697H357.79zM420.278 52.585h93.996v135.479h-93.996zM596.454 52.585h97.671v135.479h-97.671z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M694.124 52.585h81.917v135.479h-81.917zM875.288 52.584v105.023h-27.83v30.456h-71.416V52.584h99.246zM875.288 52.585h138.63v134.954h-138.63z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M875.288 187.537h138.63v97.145h-138.63zM875.288 284.684h138.63v84.543h-138.63z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M875.288 369.227h138.63v97.145h-138.63zM875.288 466.372h138.63v84.543h-138.63zM875.288 550.915h138.63v95.57h-138.63zM875.288 646.485h138.63v92.944h-138.63zM874.764 829.224h139.154V972.58H874.764zM783.919 829.224h90.845V972.58h-90.845zM691.5 829.224h92.419V972.58h-92.42zM598.554 829.224h92.944V972.58h-92.944zM425.792 828.7h87.169v143.88h-87.17z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M327.072 828.7h98.721v143.88h-98.72zM244.104 828.7h82.968v143.88h-82.968zM144.858 828.7h99.246v143.88h-99.246zM10.955 828.7h133.903v143.88H10.955zM10.955 781.964h74.04V828.7h-74.04zM10.955 735.229h94.52v46.735h-94.52z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M105.474 735.229h45.684v59.337h-45.684z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M10.955 643.86H151.16v91.37H10.955zM10.955 551.44H151.16v92.42H10.955zM10.955 463.221H151.16v88.219H10.955zM10.955 371.326H151.16v91.895H10.955z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M10.955 281.008H151.16v90.32H10.955zM10.955 155.243h114.474v35.445H10.955z"
          />
          <Path
            d="M151.16 281.008v-69.315h-25.731V190.69H10.954v90.319H151.16zM903.644 829.224v-25.73h-27.306l-1.05-64.064h138.63v89.794H903.643zM205.245 243.2h91.37v132.854h-91.37zM296.615 243.2H460.45v90.845H296.615z"
            strokeWidth={1.9996216000000002}
            fill="#da3636"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M373.806 243.2h50.411v50.412h-50.41zM296.615 334.044h32.032v42.008h-32.032zM328.647 334.044h33.082V368.7h-33.082zM361.729 334.044h29.406V368.7H361.73zM460.45 334.044h53.562v40.433H460.45zM460.45 297.81h53.562v36.234H460.45z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M460.45 258.953h53.562v38.86H460.45zM391.135 334.044h69.315v40.433h-69.315zM423.167 425.938h36.758V713.7h-36.758zM459.925 669.591h55.662v44.11h-55.662zM330.222 425.938h92.944V555.64h-92.944z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M280.337 425.938h49.886v84.018h-49.886zM280.337 509.956h49.886v45.684h-49.886zM214.173 468.998h50.41v40.958h-50.41zM214.173 425.938h50.41v43.06h-50.41z"
          />
          <Path
            d="M280.337 555.904v-28.619h-15.229l-.525-17.328h-50.41v45.947h66.164zM278.76 674.317h53.036v96.62h-53.035z"
            strokeWidth={1.9996216000000002}
            fill="#da3636"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M214.173 674.317h64.59v96.62h-64.59zM214.173 555.904v84.805h77.716v-10.502h38.596v-74.566l-116.312.263zM330.485 555.641v102.397h25.993v15.49h66.689V555.642h-92.682zM214.173 640.71h77.716v33.607h-77.716zM331.798 735.095h61.259v35.842h-61.26zM423.167 713.7v38.476h56.404v17.823h36.389l-.373-56.3h-92.42z"
          />
          <Path
            d="M393.056 735.096v-61.567h-36.578v24.807h-24.68v36.76h61.258zM596.533 243.853h95.056v131.443h-95.056z"
            strokeWidth={1.9996216000000002}
            fill="#da3636"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M613.783 243.853h17.33v18.776h-17.33zM691.59 243.853h52.945v131.443h-52.946z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M744.535 243.853h70.628V346.91h-70.628z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M744.535 346.909h70.628v28.387h-70.628zM757.139 432.24h57.5v59.862h-57.5z"
          />
          <Path
            d="M596.537 375.293v173.531H775.88v-56.719h-18.75V432.23h18.75v-56.937H596.537z"
            strokeWidth={2.94062}
            fill="#da3636"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M694.124 548.815h122.875v126.027H694.124z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M694.124 674.842h53.562v95.833h-53.562z"
          />
          <Path
            strokeWidth={1.9996216000000002}
            fill="#da3636"
            d="M747.686 674.842H817v95.833h-69.315zM652.64 674.842h41.484v95.833H652.64zM596.534 375.296v268.829M596.533 644.125h36.76v63.494h-36.76zM596.533 707.62h36.76v32.336h-36.76zM596.533 739.956h36.76v30.72h-36.76zM652.64 674.842h-19.346M694.124 548.815h-97.59M757.138 492.103l-33.616 56.712M757.138 432.24l-34.359-56.944M514.011 424.888v188.047"
          />
          <Path
            d="M291.88 630.2V674.323H331.788v24h24.687v-40.281h-26v-27.844h-38.593zM596.537 548.824v95.313h36.75v30.718h60.844V548.824h-97.594z"
            strokeWidth={2.94062}
            fill="#da3636"
          />
        </G>
        <Text
          strokeWidth={0}
          x={475.019}
          y={310}
          fontSize={14}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.75495 0 0 .74496 106.933 54.812)"
          stroke="#000"
        >
          {"H806.01"}
        </Text>
        <Path
          fill="#fff"
          strokeWidth={1.5}
          d="M286.156 745.435l7.024-.052.046-8.225h6.99v-8.275h7.17v-8.073h7.081v-8.073H325v4.037h-6.993v8.174h-7.08v8.174h-7.082v8.174h-7.17v8.275h-10.62c.157-1.337-.27-2.845.1-4.136h0zM699.165 745.435l7.024-.052.046-8.225h6.99v-8.275h7.17v-8.073h7.081v-8.073h10.533v4.037h-6.992v8.174h-7.082v8.174h-7.08v8.174h-7.17v8.275h-10.622c.158-1.337-.269-2.845.102-4.136h0zM697.165 323.426l7.024-.052.046-8.225h6.99v-8.275h7.17v-8.073h7.081v-8.073h10.533v4.036h-6.993v8.174h-7.08v8.174h-7.082v8.175h-7.17v8.274h-10.62c.157-1.337-.27-2.844.1-4.135h0z"
          stroke="#000"
        />
        <Text
          strokeWidth={0}
          x={75.19}
          y={768.26}
          fontSize={9}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(1.05592 0 0 1.04792 28.615 -35.532)"
          stroke="#000"
        >
          {"H" + floorNumber + "51.01"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={910.8}
          x={176}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "47"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={911.8}
          x={60}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "49"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={912.8}
          x={266}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "45"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={912.8}
          x={357}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "43"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={912.8}
          x={452}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "41"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={913.8}
          x={625}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "37"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={914.8}
          x={717}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "35"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={914.8}
          x={811}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "33"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={915.8}
          x={929}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "31"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={789.8}
          x={929}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "29"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={701.8}
          x={928}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "28"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={607.8}
          x={929}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "27"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={513.8}
          x={929}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "25"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={425.8}
          x={927}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "23"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={333.8}
          x={927}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "21"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={243.8}
          x={927}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "19"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={127.8}
          x={926}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "17"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={129.8}
          x={808}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "15"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={128.8}
          x={718}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "13"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={127.8}
          x={631}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "11"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={129.8}
          x={451}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "07"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={88.8}
          x={351}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "05.03"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={134.8}
          x={360}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "05.02"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={176.8}
          x={360}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "05.01"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={129.8}
          x={271}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "03"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={129.8}
          x={179}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "01"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={112.8}
          x={59}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "67"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={180.8}
          x={45}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "65"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={247.8}
          x={59}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "63"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={335.8}
          x={60}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "61"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={427.8}
          x={59}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "59"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={517.8}
          x={58}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "57"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={608.8}
          x={56}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "55"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={697.8}
          x={57}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "53"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={765.8}
          x={26}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "51.02"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={813.8}
          x={17}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "51.03"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={623.8}
          x={616}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "32.06"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={623.8}
          x={737}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "22"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={475.8}
          x={675}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "20"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={370.8}
          x={762}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "86"}
        </Text>
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="none"
          d="M747 679.8l69 95M743 348.8l70-101M747 773.8l69-95M743 246.8l70 103"
        />
        <Text
          strokeWidth={0}
          x={419.171}
          y={732.235}
          fontSize={20}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          stroke="#000"
        >
          {"H" + floorNumber + "42"}
        </Text>
        <Text
          strokeWidth={0}
          x={250.088}
          y={709.176}
          fontSize={20}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          stroke="#000"
        >
          {"H" + floorNumber + "54"}
        </Text>
        <Text
          strokeWidth={0}
          x={223.717}
          y={808}
          fontSize={18}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          stroke="#000"
        >
          {"H" + floorNumber + "52"}
        </Text>
        <Text
          strokeWidth={0}
          x={315.239}
          y={814.588}
          fontSize={18}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          stroke="#000"
        >
          {"H" + floorNumber + "77"}
        </Text>
        <Text
          strokeWidth={0}
          x={515.347}
          y={728.941}
          fontSize={14}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          stroke="#000"
        >
          {"H" + floorNumber + "40"}
        </Text>
        <Text
          strokeWidth={0}
          x={392.801}
          y={962.824}
          fontSize={14}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.64465 0 0 .60714 90.78 176.393)"
          stroke="#000"
        >
          {"H" + floorNumber + "81"}
        </Text>
        <Path
          d="M398.446 258.68c1.767 0 3.202-1.377 3.202-3.075 0-1.698-1.435-3.075-3.202-3.075-1.77 0-3.205 1.377-3.205 3.075 0 1.698 1.435 3.074 3.205 3.074zm8.98 13.257l-2.873-10.232a1.261 1.261 0 00-.11-.263c-.327-.959-1.264-1.653-2.371-1.653h-7.274c-1.154 0-2.123.754-2.409 1.777-.019.045-.035.092-.05.14l-2.822 10.231c-.188.671.227 1.36.927 1.54.698.18 1.416-.218 1.604-.888l2.217-8.037h.924l-4.023 14.54h3.79v10.04c0 .772.652 1.398 1.457 1.398.803 0 1.456-.625 1.456-1.398v-10.04h1.158v10.04c0 .772.652 1.398 1.458 1.398.803 0 1.456-.625 1.456-1.398v-10.04h3.789l-4.038-14.54h.948l2.257 8.037c.188.67.906 1.068 1.605.889.697-.18 1.112-.87.925-1.541h0z"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="none"
          d="M236 247v133M206 285h89M204 246l32 38M295 247l-58 39M235 246l-29 40M236 246l59 40M204 380l33-95M237 379l-33-93"
        />
        <Path
          stroke="#000"
          fill="#fff"
          strokeWidth={1.5}
          d="M243.189 349.089c2.701-.02 5.403-.038 8.104-.057l.054-8.894h8.066v-8.949h8.272v-8.73h8.17v-8.731h12.154v4.365h-8.068v8.84h-8.17v8.84H263.6v8.84h-8.273v8.948h-12.255c.182-1.446-.31-3.076.117-4.472h0z"
        />
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="none"
          d="M212 675.8l66 96M213 771.8l63-95"
        />
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={9}
          y={730.321}
          x={654.043}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "32.02"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={10}
          y={681.408}
          x={594.261}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "32.05"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={10}
          y={729.234}
          x={594.261}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "32.03"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={10}
          y={759.669}
          x={595.348}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "32.01"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={741.191}
          x={453.305}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "38"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={698.8}
          x={462.001}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "38.01"}
        </Text>
        <Text
          strokeWidth={0}
          x={475.019}
          y={310}
          fontSize={14}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.75495 0 0 .74496 104.933 89.812)"
          stroke="#000"
        >
          {"H" + floorNumber + "06.02"}
        </Text>
        <Text
          strokeWidth={0}
          x={475.019}
          y={310}
          fontSize={14}
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          transform="matrix(.75495 0 0 .74496 105.933 128.812)"
          stroke="#000"
        >
          {"H" + floorNumber + "06.03"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={14}
          y={497.8}
          x={357}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "62"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={11}
          y={453.8}
          x={217}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "60.01"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={11}
          y={495.8}
          x={215}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "60.03"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={12}
          y={541.8}
          x={223}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "60.05"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={10}
          y={541.8}
          x={283}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "60.06"}
        </Text>
        <Text
          fontFamily="'Trebuchet MS', Gadget, sans-serif"
          fontSize={10}
          y={474.8}
          x={284}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "60.04"}
        </Text>
        <Path
          d="M431.243 339.823c0-1.648 1.394-2.982 3.115-2.982 1.72 0 3.115 1.334 3.115 2.982 0 1.647-1.394 2.981-3.115 2.981-1.721 0-3.115-1.334-3.115-2.981zm10.473 8.439v-1.506c0-1.584-1.341-2.868-2.997-2.868h-8.732c-1.655 0-2.997 1.284-2.997 2.868v1.506c-.003.034-.005.07-.005.105v8.672c0 .674.57 1.22 1.275 1.22.703 0 1.275-.546 1.275-1.22v-8.544h.854v9.765h.006v13.798c0 .896.761 1.625 1.7 1.625.938 0 1.699-.728 1.699-1.625V358.26h1.12v13.798c0 .896.762 1.625 1.7 1.625s1.699-.728 1.699-1.625V358.26h.005v-9.765h.855v8.544c0 .674.572 1.22 1.275 1.22.704 0 1.274-.546 1.274-1.22v-8.673c0-.036-.003-.07-.006-.104h0z"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <Path
          d="M413.572 341.873c1.767 0 3.202-1.376 3.202-3.074 0-1.699-1.435-3.076-3.202-3.076-1.77 0-3.205 1.377-3.205 3.076 0 1.698 1.435 3.074 3.205 3.074zm8.981 13.257l-2.874-10.231a1.261 1.261 0 00-.11-.264c-.327-.958-1.264-1.652-2.371-1.652h-7.274c-1.154 0-2.123.753-2.409 1.776-.019.045-.035.092-.05.14l-2.822 10.232c-.188.67.227 1.36.927 1.54.698.18 1.416-.218 1.605-.89l2.216-8.036h.924l-4.023 14.541h3.79v10.04c0 .771.652 1.397 1.457 1.397.804 0 1.456-.625 1.456-1.398v-10.039h1.158v10.04c0 .771.652 1.397 1.458 1.397.803 0 1.456-.625 1.456-1.398v-10.039h3.789l-4.038-14.541h.948l2.257 8.037c.188.67.906 1.069 1.605.89.697-.181 1.112-.871.925-1.542h0z"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <Use
          xlinkHref="#prefix__a"
          transform="matrix(.04757 0 0 .06771 353.073 653.876)"
          y={-2360.53}
          x={2298.318}
        />
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          stroke="#000"
          fill="none"
          d="M459.538 426.23h53.846M514.153 611.23h-54.615"
        />
      </G>
      <DirectionPathFinding />
      <HallClass floor={floorNumber} />
    </Svg>
  );
}