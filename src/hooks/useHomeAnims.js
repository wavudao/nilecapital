import {useEffect} from 'react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin.js";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrambleTextPlugin);
 const useHomeAnims = (chartTable, chartSvg, trustInfo) => {
    useEffect(() => {
        setTimeout(() => {
          let svgLines = chartSvg.current.querySelectorAll("path"),
            tableRows = chartTable.current.querySelectorAll("tbody tr");
    
          if (svgLines.length === tableRows.length) {
            let tableRow = chartTable.current.querySelector("tbody tr"),
              tableRowBg = chartTable.current.querySelector(".table--bg"),
              tableRowHeight = parseFloat(window.getComputedStyle(tableRow).blockSize) - 1,
              tableTitle = chartSvg.current.querySelector(".el-title--h6"),
              BGstartPoint = chartTable.current.querySelector("tbody").offsetTop,
              drawSVGTime = 3,
              moveBGTime = 0.5;
    
            if (window.innerWidth <= 640) {
              let tableRowWidth = parseFloat(window.getComputedStyle(tableRow).width);
              tableRowBg.style.width = `${tableRowWidth}px`;
            }
    
            gsap
              .timeline({ repeat: -1 })
              .to(tableRowBg, 0, { height: tableRowHeight })
              .fromTo("#motionPath", drawSVGTime, { drawSVG: "0%", ease: "power4.out" }, { opacity: 1, drawSVG: "100%", ease: "power4.out" })
              .to(tableTitle, { duration: drawSVGTime / 3, scrambleText: "Bitcoin Price" }, "<")
              .to("#motionPath", 0, { opacity: 0 })
              .fromTo(tableRowBg, moveBGTime, { y: BGstartPoint }, { y: `+=${tableRowHeight}` })
              .fromTo(
                "#motionPath1",
                drawSVGTime,
                { drawSVG: "0%", ease: "power4.out" },
                { opacity: 1, drawSVG: "100%", ease: "power4.out" },
                "<"
              )
              .to(tableTitle, { duration: drawSVGTime / 3, scrambleText: "Ethereum Price" }, "<")
              .to("#motionPath1", 0, { opacity: 0 })
              .to(tableRowBg, moveBGTime, { y: `+=${tableRowHeight}` })
              .fromTo(
                "#motionPath2",
                drawSVGTime,
                { drawSVG: "0%", ease: "power4.out" },
                { opacity: 1, drawSVG: "100%", ease: "power4.out" },
                "<"
              )
              .to(tableTitle, { duration: drawSVGTime / 3, scrambleText: "Binance Price" }, "<")
              .to("#motionPath2", 0, { opacity: 0 })
              .to(tableRowBg, moveBGTime, { y: `+=${tableRowHeight}` })
              .fromTo(
                "#motionPath3",
                drawSVGTime,
                { drawSVG: "0%", ease: "power4.out" },
                { opacity: 1, drawSVG: "100%", ease: "power4.out" },
                "<"
              )
              .to(tableTitle, { duration: drawSVGTime / 3, scrambleText: "Litecoin Price" }, "<")
              .to("#motionPath3", 0, { opacity: 0 })
              .to(tableRowBg, moveBGTime, { y: `+=${tableRowHeight}` })
              .fromTo(
                "#motionPath4",
                drawSVGTime,
                { drawSVG: "0%", ease: "power4.out" },
                { opacity: 1, drawSVG: "100%", ease: "power4.out" },
                "<"
              )
              .to(tableTitle, { duration: drawSVGTime / 3, scrambleText: "Dogecoin Price" }, "<")
              .to("#motionPath4", 0, { opacity: 0 });
          }
    
          if (trustInfo.current) {
            let trustInfoEl = trustInfo.current.querySelectorAll(".section-trust-info-el");
    
            ScrollTrigger.create({
              animation: gsap.timeline().to(trustInfoEl, 1, { opacity: 1, translateY: 0, stagger: 0.5 }),
              trigger: trustInfoEl[1],
              start: "top 80%",
              end: "bottom 80%",
              scrub: 1,
              markers: false,
            });
          }
        }, 50);
      }, [chartTable, chartSvg, trustInfo]);
}

export default useHomeAnims;