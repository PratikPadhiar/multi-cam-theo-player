import { Component, AfterViewInit, OnInit } from "@angular/core";
import * as THEOplayer from "../assets/js/THEOplayer-new.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "CodeSandbox";

  public static USE_PLAYBACK_RATE = true;
  public static USE_TARGET_QUALITY = true;
  // const QUERY_PRIMARY = null;
  public static QUERY_PRIMARY = "?rays=ebcdf";
  // const QUERY_SECONDARY = null;
  public static QUERY_SECONDARY = "?rays=cbdef";
  public static FORCE_SYNC_MS = 200;
  public static USE_SEEK_NUDGE = true;
  public static readonly MAX_LATENCY_LIVE = 0.05;
  public static readonly MAX_LATENCY = 0.09;
  public static NO_SYNC_IF_MAIN_STUCK = true;
  public static NO_PLAY_IF_MAIN_STUCK = true;

  saveBandwidthUrlParam: any;
  thePlayers = [];
  configuration = {};
  STATES = ["INACTIVE", "INACTIVE", "INACTIVE", "INACTIVE"];

  // list at https://docs.google.com/spreadsheets/d/1ye7s3e73o2-iuDJ1iTu71qfHuN21BjNBqU4aY-Tmk6c/edit?usp=sharing
  config = {
    primary:
      "https://content.uplynk.com/044b9f180b4249f88b02231f13110239.m3u8" +
      (AppComponent.QUERY_PRIMARY ? AppComponent.QUERY_PRIMARY : ""),
    secondaries: [
      "https://content.uplynk.com/044b9f180b4249f88b02231f13110239.m3u8" +
        (AppComponent.QUERY_SECONDARY ? AppComponent.QUERY_SECONDARY : ""),
      "https://content.uplynk.com/044b9f180b4249f88b02231f13110239.m3u8" +
        (AppComponent.QUERY_SECONDARY ? AppComponent.QUERY_SECONDARY : ""),
      "https://content.uplynk.com/044b9f180b4249f88b02231f13110239.m3u8" +
        (AppComponent.QUERY_SECONDARY ? AppComponent.QUERY_SECONDARY : "")
    ],
    saveBandwidth: this.saveBandwidthUrlParam
  };

  constructor() {
    this.saveBandwidthUrlParam = this.findGetParameter("saveBandwidth");
    this.saveBandwidthUrlParam =
      this.saveBandwidthUrlParam && this.saveBandwidthUrlParam == "0"
        ? false
        : true;
    this.saveBandwidthUrlParam =
      this.saveBandwidthUrlParam || AppComponent.USE_TARGET_QUALITY;

    console.log("Visit", window.location.href, "for fullscreen.\n");
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }
}
