import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import Svg, { G, Path, Text , Rect, Circle } from "react-native-svg";
import { IndoorScenario } from "../../../components/IndoorDirections/IndoorScenario";

export function HallFloor9(props) {
    const [floorNumber, setFloorNumber] = React.useState("");
    const to = props.to;
    const from = props.from;

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

    return(
      <Svg width={1024} height={1024} >
      <Path fill="none" d="M-1-1h1026v1026H-1z" />
      <G>
        <G stroke="#000">
          <Path
            fill="#f7d6d6"
            strokeWidth={2.012}
            d="M17.63 103.353h1007.164v927.043H17.63z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M17.63 380.996h60.098v48.992H17.63zM17.63 429.988h60.098v45.457H17.63zM17.63 475.445h83.837v115.662H17.63z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M101.467 514.336h58.084v56.063h-58.084zM101.467 475.445h58.084v38.891h-58.084zM17.63 591.107h141.415v112.632H17.63zM17.63 703.739h141.415v92.429H17.63zM17.63 796.168h141.415v92.429H17.63zM17.63 888.597h141.415v141.799H17.63zM246.424 888.597h95.964v141.799h-95.964z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M342.388 888.597h89.904v141.799h-89.904zM432.292 888.597h91.419v141.799h-91.419z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M523.71 881.021h89.399v149.375H523.71z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M523.71 881.021h64.145v53.033H523.71zM613.109 881.021h180.312v149.375H613.109zM793.421 888.597h66.165v34.85h-66.165zM884.335 795.158h140.459v235.238H884.335zM884.335 701.719h140.459v93.439H884.335zM964.137 543.125h60.657v46.467h-60.657zM964.137 453.727h60.657v89.398h-60.657zM964.137 406.755h60.657v46.972h-60.657zM964.137 361.803h60.657v44.952h-60.657zM964.137 314.831h60.657v46.972h-60.657zM969.693 270.889h55.101v43.942h-55.101zM969.693 225.432h55.101v45.457h-55.101z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M969.693 178.965h55.101v46.467h-55.101zM930.297 103.353h46.467v61.47h-46.467zM882.82 103.353h47.477v61.47H882.82zM838.373 103.353h44.447v61.47h-44.447zM793.926 103.353h44.447v61.47h-44.447z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M749.48 103.353h44.447v61.47H749.48zM704.023 103.353h45.457v61.47h-45.457zM830.292 190.077h110.612v56.063H830.292zM830.292 246.14h110.612v94.449H830.292zM885.345 340.59h55.559v21.718h-55.559zM885.345 362.308h55.559v43.437h-55.559zM644.929 251.696h185.363v51.013H644.929zM759.076 302.709h71.216v96.975h-71.216zM705.538 302.709h53.538v96.975h-53.538zM644.929 302.709h60.609v36.871h-60.609z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M644.929 339.579h60.609v60.104h-60.609z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M679.274 376.955h26.264v22.728h-26.264zM791.401 190.077h38.891v61.619h-38.891z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M749.48 190.077h41.921v61.619H749.48zM661.091 190.077h88.389v61.62H644.929v-30.81l16.162-30.81zM660.6 103.355v46.312h10.094v15.157h33.344v-61.47H660.6zM17.631 103.355v191.281h179.282v-72.249L213.6 206.73V103.355H17.631z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M158.54 210.785h29.288l9.59 11.128-.505 51.501H158.54v-62.629zM303.882 152.036l28.065-12.459 40.692.168 15.02 32.378-62.19 27.948-21.587-48.035z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M325.468 200.07l112.001-50.332.026 42.02-11.554-.087-86.81 38.803-13.663-30.403h0z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M344.913 103.353v36.278l27.726.114 15.02 32.378 49.81-22.385v-46.385h-92.556zM437.495 191.758h96.822l13.637-29.46v-58.945H437.47l.026 88.405z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M670.694 164.824h-24.25l-29.294 64.649-82.833-37.715 13.637-29.46v-58.945l112.646.002v46.312h10.094v15.157zM213.6 206.73l17.682 17.682h105.125l-32.525-72.376 28.065-12.459 12.966.054v-36.278l-131.313.002V206.73z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M339.131 230.474L365.116 282l51.518 61.114h124.754l52.023-60.104 23.739-53.538-82.833-37.715-96.822-.002-11.554-.085-86.81 38.803zM428.756 343.115v48.487c32.83 12.627 69.653 10.029 100.51 0v-48.487h-100.51zM529.266 343.115h53.538v45.457h-53.538z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M554.544 327.915l15.633 15.2h41.417v-17.173l-32.055-26.904-24.995 28.877z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M611.594 325.942h5.48v-56.217h-17.772l-5.891 13.286-13.872 16.027 32.055 26.904zM617.073 269.725v-40.08l-17.771 40.08h17.771zM416.634 343.115h-29.042l16.808-14.513 12.234 14.513zM320.823 224.412v-17.365l6.328-3.231 9.256 20.596h-15.584zM217.966 250.083v53.214h50.357V244.01h-44.642l-5.715 6.072zM268.323 244.011h45v59.286h-45zM290.466 303.297h52.5v96.429h-52.5zM217.966 303.297h72.5v96.429h-72.5zM313.324 244.011v59.286h29.642l-29.643-59.286zM99.038 385.449v66.78H77.725v23.22h119.531v-90H99.038z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M196.913 294.636v73.304h-16.804v17.509H99.038v66.78h-21.31v-71.233H17.63l.001-86.36h179.282zM246.424 888.597h-59.886v30.771h-27.493v111.028h87.379V888.597zM257.038 523.417v59.094h19.187v59.094h-19.187v57.594H436.85V523.417H257.038z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M218.644 582.521h57.579v59.094h-57.579zM276.225 582.511l36.027-59.094M276.223 641.605l34.6 57.594M250.975 468.386v55.031H436.85v307.094h48.469V468.387H250.975z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M339.358 699.199h97.493v131.313h-97.493zM287.335 699.199h52.023v131.313h-52.023zM218.139 699.199h69.195v29.795h-69.195z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M218.139 728.993h69.195v101.518h-69.195zM884.752 427.225h57.143v26.429h-57.143zM884.752 453.654h57.143v45.714h-57.143zM884.752 499.368h57.143v44.286h-57.143zM884.752 543.654h57.143v45.951h-57.143zM841.881 589.605v52.969h26.813v59.156h156.094V589.605H841.88zM830.288 340.605v40.187h17.687V399.7h37.375v-59.094h-55.062zM727.252 427.225h157.5v92.143h-157.5zM795.466 519.368h89.286v52.143h-89.286z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M841.881 571.511h42.871v18.094h-42.871zM795.466 571.511h46.415v42.857h-46.415zM788.323 614.368h53.558v43.929h-53.558zM615.634 427.225h111.618v92.143H615.634zM566.137 427.225h49.497v46.199h-49.497zM566.137 473.425h49.497v45.944h-49.497z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M576.743 519.368h38.891v52.041h-38.891zM576.743 571.41h38.891v86.873h-38.891zM615.634 519.368h85.358v138.914h-85.358zM700.992 658.283h87.331v-43.915h7.143v-95h-94.474v138.915zM739.378 699.194h93.439V836.07h-93.439z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M739.378 699.194h54.043v96.47h-54.043zM704.528 699.194h34.85v38.386h-34.85zM643.919 708.698h60.609v28.881h-60.609zM575.228 699.194h68.69v38.386h-68.69z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M520.68 699.194h54.548V807.28H520.68z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M575.225 751.23v56.062h33.844v28.782H739.38V751.23H575.225z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M609.068 783.542h54.548v52.528h-54.548zM520.68 807.28h68.17v28.794h-68.17z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2}
            d="M141.041-1.083h90.535v106.136h-90.535z"
          />
          <Path
            fill="#da3636"
            strokeWidth={2}
            d="M1024.805 178.965V103.36h-48.044v61.467h-7.06v14.14h55.104zM570.177 343.115l-15.633-15.2-13.156 15.2h28.79z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
        </G>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={89}
          x={301}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "07"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={71}
          x={157}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "03"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={149}
          x={39}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "67"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={287}
          x={37}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "65"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={391}
          x={40}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "63"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={402}
          x={248}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "64"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={403}
          x={337}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "62"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={517}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "09"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={609}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "11"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={699}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "13"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={789}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "15"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={89}
          x={902}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "17"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={195}
          x={905}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "19"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={285}
          x={902}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "21"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={383}
          x={902}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "23"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={505}
          x={934}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "25"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={692}
          x={884}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "27"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={854}
          x={884}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "29"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={873}
          x={726}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "33"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.59136 0 0 .58968 281.724 279.59)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={805.561}
          x={728.83}
          strokeWidth={0}
        >
          {"H" + floorNumber + "32"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.59136 0 0 .58968 281.724 279.59)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={807.257}
          x={811.69}
          strokeWidth={0}
        >
          {"H" + floorNumber + "28"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={762}
          x={517}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "37"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(0 -.83308 .97923 0 130.47 647.889)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={309.012}
          x={253.941}
          strokeWidth={0}
        >
          {"H" + floorNumber + "60"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={560}
          x={326}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "66"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={559}
          x={192}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "68"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={424}
          x={635}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "20"}
        </Text>
        <Text
          transform="rotate(90 559.688 375.75)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={384}
          x={531}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "80"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.69475 0 0 .69447 129.774 152.168)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={87.579}
          x={460.575}
          strokeWidth={0}
        >
          {"H" + floorNumber + "06"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.90678 0 0 .88503 78.51 136.166)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={118.527}
          x={241.697}
          strokeWidth={0}
        >
          {"H" + floorNumber + "02"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.73488 0 0 .73857 153.921 162.302)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={155.814}
          x={409.839}
          strokeWidth={0}
        >
          {"H" + floorNumber + "14"}
        </Text>
        <Path
          d="M234.337 292.567l8.285-.054.054-8.485h8.245v-8.537h8.457v-8.329h8.352v-8.328h12.423v4.164h-8.247v8.433h-8.352v8.433h-8.352v8.433h-8.457v8.537h-12.527c.186-1.38-.318-2.935.119-4.267h0z"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <Text
          transform="matrix(.56885 0 0 .64003 107.298 175.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={453.324}
          x={-174.189}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-1"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 188.298 175.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={454.887}
          x={-175.947}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-2"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 106.298 242.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={453.324}
          x={-174.189}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-3"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 107.298 311.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={451.762}
          x={-175.947}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-7"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 188.298 175.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={523.634}
          x={-175.947}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-4"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 188.298 175.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={590.819}
          x={-174.189}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-6"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 107.298 311.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={525.196}
          x={-175.947}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-9"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 107.298 311.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={598.631}
          x={-179.463}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-11"}
        </Text>
        <Text
          transform="matrix(.50063 0 0 .58544 94.455 346.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={667.378}
          x={-182.979}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-13"}
        </Text>
        <Text
          transform="matrix(.50063 0 0 .58544 94.455 389.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={667.378}
          x={-182.979}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-15"}
        </Text>
        <Text
          transform="matrix(.50063 0 0 .58544 95.455 432.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={667.378}
          x={-182.979}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-17"}
        </Text>
        <Text
          transform="matrix(.4241 0 0 .50607 85.364 504.912)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={739.119}
          x={-190.969}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-19"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -381.986 866.71)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={786.946}
          x={-89.096}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-21"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -333.98 912.713)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={4.786}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-23"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -288.983 957.71)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={94.673}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-25"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -246.981 999.712)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={178.568}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-27"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -202.98 1043.713)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={266.458}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-29"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -158.98 1085.71)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={783.53}
          x={352.35}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-31"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -115.976 1130.707)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={440.24}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-33"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={879}
          x={392}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "41"}
        </Text>
        <Text
          transform="matrix(.91168 0 0 .93192 224.085 -76.049)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={880.249}
          x={-141.645}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-14"}
        </Text>
        <Text
          transform="matrix(.91168 0 0 .93192 224.085 -76.049)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={952.143}
          x={-141.645}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-26"}
        </Text>
        <Text
          transform="matrix(.48115 0 0 .61273 172.559 195.776)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={736.125}
          x={-174.189}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-10"}
        </Text>
        <Text
          transform="matrix(.48115 0 0 .61273 172.559 195.776)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={786.718}
          x={-176.267}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-12"}
        </Text>
        <Text
          transform="matrix(.48115 0 0 .61273 172.559 195.776)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={767.134}
          x={-53.644}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-8"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.79085 0 0 .7091 42.458 189.382)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={732.231}
          x={357.264}
          strokeWidth={0}
        >
          {"H" + floorNumber + "81"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={758}
          x={256}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "45"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={811}
          x={296}
          strokeWidth={0}
          stroke="#000"
        >
          {"H" + floorNumber + "43"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -154.92 919.197)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={637.851}
          x={190.109}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-28"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -115.837 961.525)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={640.618}
          x={271.415}
          strokeWidth={0}
        >
          {"H" + floorNumber + "61-30"}
        </Text>
        <Path
          stroke="#000"
          d="M743.594 674.472l11.154-12.718 11.848 13.51 11.848-13.51 11.154 12.718-11.849 13.511 11.849 13.51-11.154 12.72-11.848-13.511-11.848 13.51-11.154-12.718 11.848-13.51-11.848-13.512zM746.504 238.346l9.699-12.343 10.302 13.112 10.303-13.112 9.698 12.343-10.302 13.113 10.302 13.112-9.698 12.344-10.303-13.112-10.302 13.112-9.699-12.344 10.302-13.112-10.302-13.113zM211.928 662.007l9.698-12.343 10.303 13.112 10.302-13.112 9.699 12.343-10.303 13.113 10.303 13.112-9.699 12.344-10.302-13.113-10.303 13.113-9.698-12.344 10.302-13.112-10.302-13.113zM201.018 206.664l6.613-7.935 7.024 8.429 7.025-8.43 6.612 7.936-7.024 8.43 7.024 8.429-6.612 7.935-7.025-8.43-7.024 8.43-6.613-7.935 7.024-8.43-7.024-8.43zM628.816 215.94c0-2.37 2.27-4.29 5.073-4.29 2.803 0 5.073 1.92 5.073 4.29s-2.27 4.289-5.073 4.289c-2.803 0-5.073-1.92-5.073-4.29zm17.056 12.14v-2.166c0-2.279-2.184-4.127-4.881-4.127h-14.22c-2.695 0-4.881 1.848-4.881 4.127v2.166c-.005.05-.008.1-.008.151v12.476c0 .97.929 1.755 2.076 1.755 1.145 0 2.076-.786 2.076-1.755v-12.291h1.392v14.047h.01v19.849c0 1.29 1.24 2.339 2.767 2.339 1.529 0 2.767-1.048 2.767-2.34v-19.848h1.826v19.849c0 1.29 1.24 2.339 2.767 2.339 1.528 0 2.767-1.048 2.767-2.34v-19.848h.009v-14.047h1.391v12.29c0 .97.932 1.756 2.077 1.756 1.146 0 2.075-.786 2.075-1.756V228.23c0-.052-.005-.1-.01-.15h0z"
          strokeWidth={1.5}
          fill="#fff"
        />
        <Path
          fill="#fff"
          stroke="#000"
          strokeWidth={1.5}
          strokeOpacity="null"
          fillOpacity="null"
          d="M386.998 205.918c1.768 0 3.203-1.558 3.203-3.479 0-1.922-1.435-3.48-3.203-3.48-1.769 0-3.204 1.558-3.204 3.48 0 1.921 1.435 3.479 3.204 3.479zm8.981 15.001l-2.873-11.577a1.536 1.536 0 00-.11-.298c-.327-1.085-1.265-1.87-2.372-1.87h-7.273c-1.155 0-2.124.852-2.41 2.01-.018.05-.034.104-.049.159l-2.822 11.577c-.188.759.226 1.539.926 1.743.699.203 1.417-.247 1.605-1.006l2.217-9.094h.923l-4.023 16.454h3.791v11.36c0 .874.651 1.582 1.457 1.582.803 0 1.456-.708 1.456-1.582v-11.36h1.158v11.36c0 .874.652 1.582 1.457 1.582.804 0 1.456-.708 1.456-1.582v-11.36h3.79l-4.039-16.454h.948l2.258 9.094c.188.759.906 1.21 1.604 1.006.698-.204 1.113-.985.925-1.744h0z"
        />
        <Path
          d="M687.337 267.567l8.285-.054.054-8.485h8.245v-8.537h8.457v-8.329h8.352v-8.328h12.423v4.164h-8.247v8.433h-8.352v8.433h-8.352v8.433h-8.457v8.537h-12.527c.186-1.38-.318-2.935.119-4.267h0zM682.337 676.567l8.285-.054.054-8.485h8.245v-8.537h8.457v-8.329h8.352v-8.328h12.423v4.164h-8.247v8.433h-8.352v8.433h-8.352v8.433h-8.457v8.537h-12.527c.186-1.38-.318-2.935.119-4.267h0zM267.337 678.567l8.285-.054.054-8.485h8.245v-8.537h8.457v-8.329h8.352v-8.328h12.423v4.164h-8.247v8.433h-8.352v8.433h-8.352v8.433h-8.457v8.537h-12.527c.186-1.38-.318-2.935.119-4.267h0z"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <G stroke="null">
          <Path d="M469.254 421.565c1.785 0 3.23-2.146 3.227-4.796.002-2.645-1.442-4.793-3.227-4.796-1.778.004-3.222 2.15-3.227 4.796.005 2.65 1.449 4.796 3.227 4.796" />
          <Path d="M472.453 430.196v-3.013c-.002-6.444-6.389-6.374-6.388 0v12.322h.01l-6.036 8.969c-.566.839-.636.875-1.751.877h-3.694c-3.71-.002-5.937 4.957-5.94 9.167.003 4.196 2.23 9.51 6.273 9.507 0 0 5.019.004 6.569 0 1.552.004 3.433-.877 4.988-3.042l19.239-28.52c.41-.538.639-.707 1.342-.707h4.76c2.283 0 5.52-3.851 5.521-9.408-.003-5.492-3.263-9.156-5.711-9.167h-7.502c-1.554-.002-3.549.94-4.74 2.716l-6.94 10.299" />
          <Path
            fill="#fff"
            d="M484.58 421.919h6.75c1.64.005 2.743 2.733 2.742 4.357.002 1.63-.782 4.667-2.79 4.668h-4.055c-1.721-.001-2.483.358-3.475 1.825l-19.381 28.818c-.789 1.167-1.784 1.63-3.066 1.627h-6.387c-1.645.002-3.092-2.063-3.094-4.768.002-2.72 1.382-4.238 2.808-4.244h4.389c1.277.006 2.118-.536 2.846-1.627l19.715-29.298c.815-1.203 1.616-1.353 2.999-1.358"
          />
        </G>
        <Path
          strokeLinecap="undefined"
          strokeLinejoin="undefined"
          strokeWidth={1.5}
          stroke="#000"
          fill="none"
          d="M448.5 369h50M498.5 369l1 138M499.5 507h-41"
        />
        <G
          transform="matrix(.05912 0 0 .05094 390.053 293.663)"
          strokeLinecap="square"
          strokeLinejoin="round"
          stroke="null"
        >
          <Rect
            strokeWidth={1.6}
            ry={36.481}
            y={159.666}
            x={-1107.472}
            height={297.499}
            width={299.184}
            rx={36.481}
          />
          <Path
            fill="#fff"
            strokeWidth={1.6}
            d="M-1065.334 201.383h216.171V416.29h-216.171z"
          />
          <G stroke="#000">
            <Path
              strokeWidth={1.6}
              d="M-964.103 37.796a17.517 17.71 0 11-26.707 19.55M-1012.271 116.768a20.001 18.737 0 11-35.11 2.276M-1044.84-20.825a16.528 15.264 0 0129.584-2.527"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={-742.478}
              y={-819.081}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={573.231}
              y={-797.777}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M-1066.963 57.9a17.511 18.153 0 11-25.582-21.06"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={-145.287}
              y={-1048.718}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G stroke="#000200" transform="rotate(-179.83 362.697 338.413)">
            <Path
              strokeWidth={1.6}
              d="M1670.083 596.88a17.517 17.71 0 11-26.707 19.551M1621.915 675.852a20.001 18.737 0 11-35.11 2.276M1589.346 538.26a16.528 15.264 0 0129.584-2.528"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={517.3}
              y={1567.042}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={-1538.425}
              y={863.079}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M1567.223 616.985a17.511 18.153 0 11-25.582-21.061"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={-678.401}
              y={1587.275}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M-1026.616 230.37a13.906 14.327 0 11-.043.026l7.04 12.355-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={-1051.224}
              y={260.871}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-1039.425}
              y={319.865}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-1018.256}
              y={320.05}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M-960.57 230.344a13.906 14.327 0 11-.043.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={-984.967}
              y={260.845}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-973.59}
              y={320.05}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-952.52}
              y={320.05}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M-894.412 230.344a13.906 14.327 0 11-.043.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={-919.231}
              y={260.845}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-907.432}
              y={319.629}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-886.363}
              y={320.05}
              ry={9.06}
            />
          </G>
        </G>
        <G
          transform="matrix(.05912 0 0 .05094 390.053 293.663)"
          strokeLinecap="square"
          strokeLinejoin="round"
          stroke="null"
        >
          <Rect
            strokeWidth={1.6}
            ry={36.481}
            y={159.666}
            x={-633.82}
            height={297.499}
            width={299.184}
            rx={36.481}
          />
          <Path
            fill="#fff"
            strokeWidth={1.6}
            d="M-591.681 201.383h216.171V416.29h-216.171z"
          />
          <G stroke="#000">
            <Path
              strokeWidth={1.6}
              d="M-490.45 37.796a17.517 17.71 0 11-26.707 19.55M-538.619 116.768a20.001 18.737 0 11-35.109 2.276M-571.187-20.825a16.528 15.264 0 0129.584-2.527"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={-438.807}
              y={-454.11}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={270.926}
              y={-434.603}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M-593.31 57.9a17.511 18.153 0 11-25.583-21.06"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={-140.62}
              y={-575.057}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G stroke="#000200" transform="rotate(-179.83 362.697 338.413)">
            <Path
              strokeWidth={1.6}
              d="M1196.433 598.277a17.517 17.71 0 11-26.707 19.55M1148.264 677.248a20.001 18.737 0 11-35.109 2.276M1115.696 539.656a16.528 15.264 0 0129.584-2.528"
            />
            <Rect
              strokeWidth={1.596}
              width={99.278}
              height={34.652}
              x={212.559}
              y={1202.963}
              transform="matrix(.6374 -.77054 .76744 .64112 0 0)"
              ry={8.318}
            />
            <Rect
              strokeWidth={1.596}
              width={102.245}
              height={34.816}
              x={-1237.197}
              y={499.011}
              transform="matrix(-.64195 -.76674 .76984 -.63823 0 0)"
              ry={9.821}
            />
            <Path
              strokeWidth={1.6}
              d="M1093.572 618.38a17.511 18.153 0 11-25.582-21.06"
            />
            <Rect
              strokeWidth={1.949}
              width={125.008}
              height={39.519}
              x={-684.464}
              y={1113.621}
              transform="matrix(.00315 -1 .99995 .00985 0 0)"
              ry={9.432}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M-552.964 230.37a13.906 14.327 0 11-.043.026l7.04 12.355-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={-577.571}
              y={260.871}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-565.772}
              y={319.865}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-544.604}
              y={320.05}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M-486.917 230.344a13.906 14.327 0 11-.044.026l7.04 12.356-6.996-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={-511.314}
              y={260.845}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-499.937}
              y={320.05}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-478.868}
              y={320.05}
              ry={9.06}
            />
          </G>
          <G strokeWidth={1.6}>
            <Path d="M-420.76 230.344a13.906 14.327 0 11-.043.026l7.04 12.356-6.997-12.382z" />
            <Rect
              width={62.787}
              height={69.95}
              x={-445.578}
              y={260.845}
              ry={8.428}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-433.779}
              y={319.629}
              ry={9.06}
            />
            <Rect
              width={18.12}
              height={89.755}
              x={-412.71}
              y={320.05}
              ry={9.06}
            />
          </G>
        </G>
        <G stroke="null">
          <G transform="matrix(.07331 0 0 .07078 328.733 596.97)">
            <Circle r={38.178} cy={-5535.212} cx={4644.163} />
            <Path d="M4669.152-5466.796l-27.853-4.123s-32.868-39.109-34.173-40.625a34.996 34.996 0 00-7.391-6.065c-16.48-10.103-38.03-4.934-48.132 11.544l-37.832 61.706c-9.746 15.895-5.278 36.503 9.838 47.012v86.955c0 11.046 8.954 20 20 20s20-8.954 20-20v-86.959a34.861 34.861 0 009.838-10.42l34.498-56.268 14.004 16.744a15.005 15.005 0 009.31 5.215l33.5 4.96c.745.11 1.484.164 2.215.164 7.313 0 13.717-5.355 14.82-12.805 1.213-8.195-4.446-15.822-12.642-17.035zM4741.859-5483.29H4705.7a1.949 1.949 0 00-1.838-.946 1.934 1.934 0 00-1.487.945h-31.852a5 5 0 00-2.945 9.04l54.894 40.016a4.996 4.996 0 002.945.96h16.44a5 5 0 005-5v-40.016a5 5 0 00-5-5zM4679.04-5507.025a1.938 1.938 0 100 3.876c.714 0 1.438.033 2.15.098a1.938 1.938 0 10.353-3.862 28.314 28.314 0 00-2.502-.112zM4696.678-5495.004c.383.45.928.681 1.476.681a1.938 1.938 0 001.474-3.197 27.223 27.223 0 00-3.052-3.05 1.938 1.938 0 10-2.515 2.95 23.338 23.338 0 012.617 2.616zM4699.604-5490.664a23.07 23.07 0 011.438 3.404 1.941 1.941 0 002.449 1.232 1.94 1.94 0 001.232-2.45 26.962 26.962 0 00-1.681-3.977 1.937 1.937 0 10-3.438 1.791zM4686.315-5501.984c1.167.386 2.314.87 3.406 1.438a1.938 1.938 0 101.79-3.44 27.014 27.014 0 00-3.98-1.68 1.94 1.94 0 00-1.217 3.683z" />
          </G>
          <Path
            d="M4743.233-5629.39H4512.23c-45.214 0-82 36.783-82 81.997v230.993c0 45.22 36.786 82.01 82 82.01h231.002c45.215 0 81.999-36.79 81.999-82.01v-230.993c0-45.214-36.784-81.998-82-81.998zm66.999 312.99c0 36.95-30.055 67.01-67 67.01h-231.001c-36.943 0-67-30.06-67-67.01v-230.993c0-36.943 30.057-66.998 67-66.998h231.002c36.944 0 66.999 30.055 66.999 66.998v230.993z"
            transform="matrix(.07331 0 0 .07078 328.733 596.97)"
          />
        </G>
        <G stroke="null">
          <G transform="matrix(.06572 0 0 .07078 357.66 596.685)">
            <Circle r={38.178} cy={501.589} cx={6389.837} />
            <Path d="M6414.826 570.005l-27.853-4.123s-32.868-39.11-34.173-40.625a34.996 34.996 0 00-7.39-6.065c-16.48-10.103-38.03-4.934-48.133 11.544l-37.832 61.706c-9.746 15.895-5.278 36.503 9.838 47.012v86.955c0 11.046 8.954 20 20 20s20-8.954 20-20v-86.96a34.861 34.861 0 009.838-10.42l34.498-56.267 14.004 16.744a15.005 15.005 0 009.31 5.215l33.5 4.96c.745.11 1.484.164 2.215.164 7.313 0 13.717-5.355 14.82-12.805 1.213-8.195-4.446-15.822-12.642-17.035zM6487.533 553.51h-36.158a1.949 1.949 0 00-1.838-.945 1.934 1.934 0 00-1.487.945h-31.852a5 5 0 00-2.945 9.04l54.894 40.016a4.996 4.996 0 002.945.959h16.441a5 5 0 005-5V558.51a5 5 0 00-5-5zM6424.715 529.776a1.938 1.938 0 100 3.876c.713 0 1.437.033 2.15.098a1.938 1.938 0 10.353-3.862 28.314 28.314 0 00-2.503-.112zM6442.352 541.797c.383.45.928.68 1.476.68a1.938 1.938 0 001.474-3.197 27.223 27.223 0 00-3.052-3.05 1.938 1.938 0 10-2.515 2.95 23.338 23.338 0 012.617 2.617zM6445.278 546.137a23.07 23.07 0 011.438 3.404 1.941 1.941 0 002.45 1.232 1.94 1.94 0 001.231-2.45 26.962 26.962 0 00-1.68-3.977 1.937 1.937 0 10-3.439 1.79zM6431.99 534.817c1.166.386 2.313.87 3.405 1.438a1.938 1.938 0 101.79-3.44 27.014 27.014 0 00-3.979-1.681 1.94 1.94 0 00-1.217 3.683z" />
          </G>
          <Path
            d="M6488.907 407.41h-231.002c-45.214 0-81.999 36.784-81.999 81.998V720.4c0 45.22 36.785 82.009 82 82.009h231.001c45.215 0 82-36.79 82-82.01V489.409c0-45.214-36.785-81.998-82-81.998zm67 312.99c0 36.95-30.056 67.01-67 67.01h-231.002c-36.943 0-66.999-30.06-66.999-67.01V489.409c0-36.943 30.056-66.998 67-66.998h231.001c36.944 0 67 30.055 67 66.998V720.4z"
            transform="matrix(.06572 0 0 .07078 357.66 596.685)"
          />
        </G>
        {from !== null && to !==null &&
          <IndoorScenario floor={floorNumber} from={from} to={to} building={"Hall Building"} />
        }
      </G>
    </Svg>
    );
}