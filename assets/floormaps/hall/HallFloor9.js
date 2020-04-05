import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import Svg, { G, Path, Text, Line} from "react-native-svg";
import { IndoorScenario } from "../../../components/IndoorDirections/IndoorScenario";
import { Hall9Coordinates } from "../../../constants/Hall9Coordinates";

export function HallFloor9(props) {
    const [floorNumber, setFloorNumber] = React.useState("");
    const [to, setTo] = React.useState(props.from);
    const [from, setFrom] = React.useState(props.to);
    const rooms = Hall9Coordinates();

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
      <Svg width={1024} height={1024}>
      <Path fill="none" d="M-1-1h582v402H-1z" />
      <G>
        <G stroke="#000">
          <Path
            fill="#f7d6d6"
            strokeWidth={2.012}
            d="M18.634 102.346h1007.164v927.043H18.634z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M18.634 379.988h60.098v48.992H18.634zM18.634 428.98h60.098v45.457H18.634zM18.634 474.437h83.837v115.662H18.634zM102.471 513.328h58.084v56.063h-58.084zM102.471 474.437h58.084v38.891h-58.084zM18.634 590.1h141.415v112.632H18.634zM18.634 702.732h141.415v92.429H18.634zM18.634 795.161h141.415v92.429H18.634zM18.634 887.59h141.415v141.799H18.634zM247.428 887.59h95.964v141.799h-95.964zM343.392 887.59h89.904v141.799h-89.904zM433.296 887.59h91.419v141.799h-91.419zM524.715 880.014h89.399v149.375h-89.399z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M524.715 880.014h64.145v53.033h-64.145zM614.113 880.014h180.312v149.375H614.113z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M794.425 887.59h66.165v34.85h-66.165zM885.339 794.151h140.459v235.238H885.339zM885.339 700.711h140.459v93.439H885.339zM965.141 542.118h60.657v46.467h-60.657zM965.141 452.719h60.657v89.398h-60.657zM965.141 405.747h60.657v46.972h-60.657zM965.141 360.795h60.657v44.952h-60.657zM965.141 313.823h60.657v46.972h-60.657zM970.697 269.881h55.101v43.942h-55.101z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M970.697 224.425h55.101v45.457h-55.101zM970.697 177.958h55.101v46.467h-55.101zM931.301 102.346h46.467v61.47h-46.467zM883.824 102.346h47.477v61.47h-47.477zM839.377 102.346h44.447v61.47h-44.447zM794.93 102.346h44.447v61.47H794.93z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M750.484 102.346h44.447v61.47h-44.447zM705.027 102.346h45.457v61.47h-45.457zM831.296 189.069h110.612v56.063H831.296zM831.296 245.133h110.612v94.449H831.296zM886.349 339.582h55.559V361.3h-55.559zM886.349 361.3h55.559v43.437h-55.559zM645.933 250.689h185.363v51.013H645.933z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M760.08 301.701h71.216v96.975H760.08zM706.542 301.701h53.538v96.975h-53.538zM645.933 301.701h60.609v36.871h-60.609zM645.933 338.572h60.609v60.104h-60.609z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M680.278 375.947h26.264v22.728h-26.264zM792.405 189.069h38.891v61.619h-38.891z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M750.484 189.069h41.921v61.619h-41.921zM662.095 189.07h88.389v61.619H645.933v-30.81l16.162-30.81zM661.604 102.347v46.313h10.094v15.156h33.344v-61.469h-43.438zM18.636 102.347v191.281h179.28V221.38l16.688-15.658V102.347H18.636z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M159.544 209.777h29.288l9.59 11.129-.505 51.5h-38.373v-62.629zM304.886 151.029l28.065-12.46 40.692.169 15.02 32.377-62.19 27.948-21.587-48.034z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M326.472 199.063l112.001-50.332.026 42.02-11.553-.088-86.81 38.803-13.664-30.403z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M345.918 102.346v36.277l27.725.115 15.02 32.377 49.81-22.384v-46.385h-92.555zM438.5 190.75h96.821l13.637-29.46v-58.944H438.473l.026 88.404z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M671.698 163.816h-24.25l-29.294 64.65-82.833-37.716 13.637-29.46v-58.944l112.646.001v46.313h10.094v15.156zM214.604 205.722l17.682 17.682h105.125l-32.525-72.375 28.065-12.46 12.967.054v-36.277l-131.314.001v103.375z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M340.135 229.466l25.986 51.527 51.517 61.114h124.754l52.023-60.104 23.739-53.538-82.833-37.715-96.822-.002-11.553-.085-86.81 38.803zM429.76 342.107v48.488c32.83 12.627 69.653 10.028 100.51 0v-48.488H429.76zM530.27 342.107h53.538v45.457H530.27z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M555.548 326.908l15.634 15.2h41.416v-17.173l-32.055-26.905-24.995 28.878z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M612.598 324.935h5.48v-56.217h-17.772l-5.89 13.285-13.873 16.027 32.055 26.905zM618.078 268.718v-40.081l-17.772 40.08h17.772zM417.638 342.107h-29.041l16.807-14.513 12.234 14.513zM321.828 223.404v-17.365l6.327-3.231 9.256 20.596h-15.583zM218.97 249.075v53.214h50.358v-59.286h-44.643l-5.715 6.072zM269.328 243.003h45v59.286h-45zM291.47 302.289h52.5v96.429h-52.5zM218.97 302.289h72.5v96.429h-72.5zM314.328 243.003v59.286h29.642l-29.642-59.286zM100.042 384.441v66.781H78.729v23.219h119.532v-90h-98.22z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M197.917 293.628v73.304h-16.804v17.509h-81.071v66.781h-21.31v-71.234H18.634l.002-86.36h179.28zM247.428 887.59h-59.886v30.77H160.05v111.029h87.378v-141.8zM258.042 522.41v59.093h19.187v59.094h-19.187v57.594h179.812V522.41H258.042z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M219.649 581.513h57.579v59.094h-57.579zM277.23 581.503l36.026-59.093M277.227 640.597l34.6 57.594M251.98 467.378v55.032h185.874v307.093h48.47V467.378H251.978z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M340.362 698.191h97.493v131.313h-97.493zM288.339 698.191h52.023v131.313h-52.023zM219.143 698.191h69.195v29.795h-69.195zM219.143 727.986h69.195v101.518h-69.195zM885.756 426.218h57.143v26.429h-57.143z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M885.756 452.646h57.143v45.714h-57.143zM885.756 498.361h57.143v44.286h-57.143z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M885.756 542.646h57.143v45.951h-57.143zM842.886 588.597v52.969h26.812v59.156h156.094V588.597H842.886zM831.292 339.597v40.188h17.687v18.906h37.375v-59.094h-55.062zM728.256 426.218h157.5v92.143h-157.5z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M796.47 518.361h89.286v52.143H796.47z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M842.886 570.503h42.871v18.094h-42.871zM796.47 570.503h46.415v42.857H796.47zM789.328 613.361h53.558v43.929h-53.558zM616.639 426.218h111.618v92.143H616.639zM567.141 426.218h49.497v46.199h-49.497z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M567.141 472.417h49.497v45.944h-49.497zM577.748 518.361h38.891v52.041h-38.891zM577.748 570.402h38.891v86.873h-38.891zM616.639 518.361h85.358v138.914h-85.358z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M701.996 657.275h87.332v-43.914h7.142v-95h-94.474v138.914zM740.382 698.186h93.439v136.876h-93.439z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M740.382 698.186h54.043v96.47h-54.043z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M705.532 698.186h34.85v38.386h-34.85zM644.923 707.691h60.609v28.881h-60.609zM576.232 698.186h68.69v38.386h-68.69zM521.684 698.186h54.548v108.086h-54.548z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M576.23 750.222v56.063h33.844v28.781h130.312v-84.844H576.229z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2.012}
            d="M610.073 782.534h54.548v52.528h-54.548zM521.684 806.272h68.17v28.794h-68.17z"
            transform="matrix(-.99583 0 0 -.9924 1021.687 1021.48)"
          />
          <Path
            fill="#da3636"
            strokeWidth={2}
            d="M140.041-.083h90.535v106.136h-90.535z"
          />
          <Path
            fill="#da3636"
            strokeWidth={2}
            d="M1025.81 177.957v-75.606h-48.045v61.468h-7.06v14.138h55.104zM571.182 342.107l-15.634-15.2-13.156 15.2h28.79z"
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
          {"H907"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={71}
          x={157}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H903"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={149}
          x={39}
          strokeWidth={0}
          stroke="#000"
        >
          {"H967"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={287}
          x={37}
          strokeWidth={0}
          stroke="#000"
        >
          {"H965"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={391}
          x={40}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H963"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={402}
          x={248}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H964"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={403}
          x={337}
          strokeWidth={0}
          stroke="#000"
        >
          {"H962"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={517}
          strokeWidth={0}
          stroke="#000"
        >
          {"H909"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={609}
          strokeWidth={0}
          stroke="#000"
        >
          {"H911"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={699}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H913"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={88}
          x={789}
          strokeWidth={0}
          stroke="#000"
        >
          {"H915"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={89}
          x={902}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H917"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={195}
          x={905}
          strokeWidth={0}
          stroke="#000"
        >
          {"H919"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={285}
          x={902}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H921"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={383}
          x={902}
          strokeWidth={0}
          stroke="#000"
        >
          {"H923"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={505}
          x={934}
          strokeWidth={0}
          stroke="#000"
        >
          {"H925"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={692}
          x={884}
          strokeWidth={0}
          stroke="#000"
        >
          {"H927"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={854}
          x={884}
          strokeWidth={0}
          stroke="#000"
        >
          {"H929"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.49455 0 0 .56364 412.95 338.182)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={795.226}
          x={841.264}
          strokeWidth={0}
        >
          {"H931"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={873}
          x={726}
          strokeWidth={0}
          stroke="#000"
        >
          {"H933"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.65142 0 0 .67273 238.431 215.018)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={681.973}
          x={684}
          strokeWidth={0}
        >
          {"H985"}
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
          {"H932"}
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
          {"H928"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={762}
          x={517}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H937"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(0 -.83308 .97923 0 131.821 646.584)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={309.012}
          x={253.941}
          strokeWidth={0}
        >
          {"H960"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(0 -.67823 .716 0 154.232 678.017)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={388.606}
          x={261.313}
          strokeWidth={0}
          cursor="move"
        >
          {"H962"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.69475 0 0 .69447 129.774 152.168)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={557}
          x={405.879}
          strokeWidth={0}
        >
          {"H966"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={560}
          x={326}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H966"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={559}
          x={192}
          strokeWidth={0}
          stroke="#000"
        >
          {"H968"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={424}
          x={635}
          strokeWidth={0}
          stroke="#000"
        >
          {"H920"}
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
          {"H980"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={266}
          x={608}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H910"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.69475 0 0 .69447 129.774 152.168)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={162.456}
          x={804.585}
          strokeWidth={0}
        >
          {"H990"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.69475 0 0 .69447 129.774 152.168)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={241.003}
          x={893.565}
          strokeWidth={0}
        >
          {"H986"}
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
          {"H906"}
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
          {"H902"}
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
          {"H914"}
        </Text>
        <Path
          d="M234.337 292.567l8.285-.054.054-8.485h8.245v-8.537h8.457v-8.329h8.352v-8.328h12.423v4.164h-8.247v8.433h-8.352v8.433h-8.352v8.433h-8.457v8.537h-12.527c.186-1.38-.318-2.935.119-4.267h0z"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <Text
          transform="matrix(.69475 0 0 .69447 129.774 152.168)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={557}
          x={405.879}
          strokeWidth={0}
        >
          {"H966"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 107.298 175.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={453.324}
          x={-174.189}
          strokeWidth={0}
        >
          {"H961-1"}
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
          {"H961-2"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 106.298 242.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={453.324}
          x={-174.189}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-3"}
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
          {"H961-7"}
        </Text>
        <Text
          transform="matrix(.56885 0 0 .64003 188.298 175.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={523.634}
          x={-175.947}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-4"}
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
          {"H961-6"}
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
          {"H961-9"}
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
          {"H961-11"}
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
          {"H961-13"}
        </Text>
        <Text
          transform="matrix(.50063 0 0 .58544 94.455 389.4)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={667.378}
          x={-182.979}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-15"}
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
          {"H961-17"}
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
          {"H961-19"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -381.986 866.71)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={786.946}
          x={-89.096}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-21"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -333.98 912.713)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={4.786}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-23"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -288.983 957.71)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={94.673}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-25"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -246.981 999.712)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={178.568}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-27"}
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
          {"H961-29"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -158.98 1085.71)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={783.53}
          x={352.35}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-31"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -115.982 1130.713)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={785.238}
          x={440.24}
          strokeWidth={0}
        >
          {"H961-33"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={879}
          x={392}
          strokeWidth={0}
          stroke="#000"
        >
          {"H941"}
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
          {"H961-14"}
        </Text>
        <Text
          transform="matrix(.91168 0 0 .93192 224.085 -76.049)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={952.143}
          x={-141.645}
          strokeWidth={0}
          cursor="move"
        >
          {"H961-26"}
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
          {"H961-10"}
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
          {"H961-12"}
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
          {"H961-8"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.79085 0 0 .7091 42.458 189.382)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={675.821}
          x={286.455}
          strokeWidth={0}
        >
          {"H975"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.79085 0 0 .7091 42.458 189.382)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={677.231}
          x={357.264}
          strokeWidth={0}
        >
          {"H977"}
        </Text>
        <Text
          stroke="#000"
          transform="matrix(.79085 0 0 .7091 42.458 189.382)"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={732.231}
          x={357.264}
          strokeWidth={0}
          cursor="move"
        >
          {"H981"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={758}
          x={256}
          strokeWidth={0}
          stroke="#000"
          cursor="move"
        >
          {"H945"}
        </Text>
        <Text
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={811}
          x={296}
          strokeWidth={0}
          stroke="#000"
        >
          {"H943"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -160.048 923.367)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={637.851}
          x={190.109}
          strokeWidth={0}
        >
          {"H961-28"}
        </Text>
        <Text
          transform="matrix(0 -.50063 .58544 0 -118.922 960.717)"
          stroke="#000"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={24}
          y={645.742}
          x={269.417}
          strokeWidth={0}
        >
          {"H961-30"}
        </Text>
        <Path
          d="M735.594 654.624l14.548-15.87 15.454 16.859 15.454-16.859 14.548 15.87-15.454 16.86 15.454 16.858-14.548 15.87-15.454-16.858-15.454 16.858-14.548-15.87 15.454-16.859-15.454-16.859zM746.504 238.346l9.698-12.343 10.303 13.112 10.303-13.112 9.698 12.343-10.302 13.113 10.302 13.112-9.698 12.344-10.303-13.112-10.303 13.112-9.698-12.344 10.302-13.112-10.302-13.113zM211.928 662.007l9.698-12.343 10.303 13.112 10.302-13.112 9.699 12.343-10.303 13.113 10.303 13.112-9.699 12.344-10.302-13.113-10.303 13.113-9.698-12.344 10.302-13.112-10.302-13.113zM201.018 206.664l6.613-7.935 7.024 8.429 7.025-8.43 6.612 7.936-7.024 8.43 7.024 8.429-6.612 7.935-7.025-8.43-7.024 8.43-6.613-7.935 7.024-8.43-7.024-8.43z"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <Path
          stroke="#000"
          d="M352.229 303.718l-5.592-4.507v2.253h-6.001v-6.76h16.105v18.028h-16.105v-6.76h6.001v2.253l5.592-4.507z"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth={1.5}
          fill="#fff"
        />
        {from !== null && to !==null &&
          <IndoorScenario floor={floorNumber} from={from} to={to} building={"Hall Building"} />
        }
      </G>
    </Svg>
    );
}