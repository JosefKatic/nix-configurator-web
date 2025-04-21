import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Acme = {
  __typename?: 'Acme';
  enable: Scalars['Boolean']['output'];
};

export type AcmeInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Auth = {
  __typename?: 'Auth';
  freeipa: FreeIpa;
  keycloak: Keycloak;
};

export type AuthInput = {
  freeipa?: InputMaybe<FreeIpaInput>;
  keycloak?: InputMaybe<KeycloakInput>;
};

export type CGit = {
  __typename?: 'CGit';
  enable: Scalars['Boolean']['output'];
};

export type CGitInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cache = {
  __typename?: 'Cache';
  enable: Scalars['Boolean']['output'];
};

export type CacheInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ConfigType {
  Home = 'HOME',
  System = 'SYSTEM'
}

export type Core = {
  __typename?: 'Core';
  disableDefaults: Scalars['Boolean']['output'];
  kernel: Scalars['String']['output'];
  locale: Locale;
  network: Network;
  securityRules: SecurityRules;
  shells: Shells;
};

export type CoreInput = {
  disableDefaults?: InputMaybe<Scalars['Boolean']['input']>;
  kernel?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInput>;
  network?: InputMaybe<NetworkInput>;
  securityRules?: InputMaybe<SecurityRulesInput>;
  shells?: InputMaybe<ShellsInput>;
};

export type Databases = {
  __typename?: 'Databases';
  mysql: Mysql;
  postgresql: Postgresql;
};

export type DatabasesInput = {
  mysql?: InputMaybe<MysqlInput>;
  postgresql?: InputMaybe<PostgresqlInput>;
};

export type Desktop = {
  __typename?: 'Desktop';
  gamemode: Gamemode;
  wayland: Wayland;
};

export type DesktopInput = {
  gamemode?: InputMaybe<GamemodeInput>;
  wayland?: InputMaybe<WaylandInput>;
};

export type DesktopManager = {
  __typename?: 'DesktopManager';
  gnome: Gnome;
  plasma6: Plasma6;
};

export type DesktopManagerInput = {
  gnome?: InputMaybe<GnomeInput>;
  plasma6?: InputMaybe<Plasma6Input>;
};

export type Device = {
  __typename?: 'Device';
  hostname: Scalars['String']['output'];
  ip: Scalars['String']['output'];
  isOnline: Scalars['Boolean']['output'];
};

export type DeviceConfig = {
  __typename?: 'DeviceConfig';
  homeConfig?: Maybe<HomeConfig>;
  hostname: Scalars['String']['output'];
  systemConfig?: Maybe<SystemConfig>;
};

export type DisplayManager = {
  __typename?: 'DisplayManager';
  gdm: Gdm;
};

export type DisplayManagerInput = {
  gdm: GdmInput;
};

export type Docker = {
  __typename?: 'Docker';
  enable: Scalars['Boolean']['output'];
};

export type DockerInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Fail2ban = {
  __typename?: 'Fail2ban';
  enable: Scalars['Boolean']['output'];
};

export type Fail2banInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Fish = {
  __typename?: 'Fish';
  enable: Scalars['Boolean']['output'];
};

export type FishInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FreeIpa = {
  __typename?: 'FreeIPA';
  enable: Scalars['Boolean']['output'];
};

export type FreeIpaInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Gdm = {
  __typename?: 'GDM';
  enable: Scalars['Boolean']['output'];
};

export type GdmInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Gamemode = {
  __typename?: 'Gamemode';
  enable: Scalars['Boolean']['output'];
};

export type GamemodeInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GitDaemon = {
  __typename?: 'GitDaemon';
  enable: Scalars['Boolean']['output'];
};

export type GitDaemonInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GitServer = {
  __typename?: 'GitServer';
  cgit: CGit;
  daemon: GitDaemon;
};

export type GitServerInput = {
  cgit?: InputMaybe<CGitInput>;
  daemon?: InputMaybe<GitDaemonInput>;
};

export type Gnome = {
  __typename?: 'Gnome';
  enable: Scalars['Boolean']['output'];
};

export type GnomeInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Headscale = {
  __typename?: 'Headscale';
  enable: Scalars['Boolean']['output'];
};

export type HeadscaleInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeAlacritty = {
  __typename?: 'HomeAlacritty';
  enable: Scalars['Boolean']['output'];
};

export type HomeAlacrittyInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeBrave = {
  __typename?: 'HomeBrave';
  enable: Scalars['Boolean']['output'];
};

export type HomeBraveInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeBrowsers = {
  __typename?: 'HomeBrowsers';
  brave: HomeBrave;
  chromium: HomeChromium;
  firefox: HomeFirefox;
};

export type HomeBrowsersInput = {
  brave?: InputMaybe<HomeBraveInput>;
  chromium?: InputMaybe<HomeChromiumInput>;
  firefox?: InputMaybe<HomeFirefoxInput>;
};

export type HomeChromium = {
  __typename?: 'HomeChromium';
  enable: Scalars['Boolean']['output'];
};

export type HomeChromiumInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeConfig = {
  __typename?: 'HomeConfig';
  desktop?: Maybe<HomeDesktop>;
  services?: Maybe<HomeServices>;
  terminal?: Maybe<HomeTerminal>;
};

export type HomeConfigInput = {
  desktop?: InputMaybe<HomeDesktopInput>;
  services?: InputMaybe<HomeServicesInput>;
  terminal?: InputMaybe<HomeTerminalInput>;
};

export type HomeDesktop = {
  __typename?: 'HomeDesktop';
  programs: HomePrograms;
  services: HomeDesktopServices;
  wayland?: Maybe<HomeWayland>;
};

export type HomeDesktopInput = {
  programs?: InputMaybe<HomeProgramsInput>;
  services?: InputMaybe<HomeServicesInput>;
  wayland?: InputMaybe<HomeWaylandInput>;
};

export type HomeDesktopServices = {
  __typename?: 'HomeDesktopServices';
  kdeconnect: HomeKdeConnect;
  mako: HomeMako;
  polkit_agent: HomeKdeConnect;
};

export type HomeEditors = {
  __typename?: 'HomeEditors';
  vscode: HomeVsCode;
};

export type HomeEditorsInput = {
  vscode?: InputMaybe<HomeVsCodeInput>;
};

export type HomeEmulators = {
  __typename?: 'HomeEmulators';
  alacritty?: Maybe<HomeAlacritty>;
  kitty?: Maybe<HomeKitty>;
  wezterm?: Maybe<HomeWezterm>;
};

export type HomeEmulatorsInput = {
  alacritty?: InputMaybe<HomeAlacrittyInput>;
  kitty?: InputMaybe<HomeKittyInput>;
  wezterm?: InputMaybe<HomeWeztermInput>;
};

export type HomeFirefox = {
  __typename?: 'HomeFirefox';
  enable: Scalars['Boolean']['output'];
};

export type HomeFirefoxInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeFish = {
  __typename?: 'HomeFish';
  enable: Scalars['Boolean']['output'];
};

export type HomeFishInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeGames = {
  __typename?: 'HomeGames';
  lutris: HomeLutris;
  minecraft: HomeMinecraft;
};

export type HomeGamesInput = {
  lutris?: InputMaybe<HomeLutrisInput>;
  minecraft?: InputMaybe<HomeMinecraftInput>;
};

export type HomeHyprSplit = {
  __typename?: 'HomeHyprSplit';
  enable: Scalars['Boolean']['output'];
  numberOfWorkspaces: Scalars['Int']['output'];
};

export type HomeHyprland = {
  __typename?: 'HomeHyprland';
  enable: Scalars['Boolean']['output'];
  plugins: HomeHyprlandPlugins;
  settings: HomeHyprlandSettings;
};

export type HomeHyprlandPlugins = {
  __typename?: 'HomeHyprlandPlugins';
  hyprsplit: HomeHyprSplit;
};

export type HomeHyprlandSettings = {
  __typename?: 'HomeHyprlandSettings';
  mod: Scalars['String']['output'];
};

export type HomeKdeConnect = {
  __typename?: 'HomeKdeConnect';
  enable: Scalars['Boolean']['output'];
};

export type HomeKitty = {
  __typename?: 'HomeKitty';
  enable: Scalars['Boolean']['output'];
};

export type HomeKittyInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeLutris = {
  __typename?: 'HomeLutris';
  enable: Scalars['Boolean']['output'];
};

export type HomeLutrisInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeMpv = {
  __typename?: 'HomeMPV';
  enable: Scalars['Boolean']['output'];
};

export type HomeMpvInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeMako = {
  __typename?: 'HomeMako';
  enable: Scalars['Boolean']['output'];
};

export type HomeMedia = {
  __typename?: 'HomeMedia';
  mpv: HomeMpv;
};

export type HomeMediaInput = {
  mpv?: InputMaybe<HomeMpvInput>;
};

export type HomeMediaServices = {
  __typename?: 'HomeMediaServices';
  playerctl: HomePlayerctl;
};

export type HomeMinecraft = {
  __typename?: 'HomeMinecraft';
  enable: Scalars['Boolean']['output'];
};

export type HomeMinecraftInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePlayerctl = {
  __typename?: 'HomePlayerctl';
  enable: Scalars['Boolean']['output'];
};

export type HomeProductivity = {
  __typename?: 'HomeProductivity';
  proton: HomeProton;
  zathura: HomeZathura;
};

export type HomeProductivityInput = {
  proton?: InputMaybe<HomeProtonInput>;
  zathura?: InputMaybe<HomeZathuraInput>;
};

export type HomePrograms = {
  __typename?: 'HomePrograms';
  browsers?: Maybe<HomeBrowsers>;
  editors?: Maybe<HomeEditors>;
  emulators?: Maybe<HomeEmulators>;
  games?: Maybe<HomeGames>;
  media?: Maybe<HomeMedia>;
  productivity?: Maybe<HomeProductivity>;
};

export type HomeProgramsInput = {
  browsers?: InputMaybe<HomeBrowsersInput>;
  editors?: InputMaybe<HomeEditorsInput>;
  emulators?: InputMaybe<HomeEmulatorsInput>;
  games?: InputMaybe<HomeGamesInput>;
  media?: InputMaybe<HomeMediaInput>;
  productivity?: InputMaybe<HomeProductivityInput>;
};

export type HomeProton = {
  __typename?: 'HomeProton';
  mail?: Maybe<HomeProtonMail>;
  pass?: Maybe<HomeProtonPass>;
  vpn?: Maybe<HomeProtonVpn>;
};

export type HomeProtonInput = {
  mail?: InputMaybe<HomeProtonMailInput>;
  pass?: InputMaybe<HomeProtonPassInput>;
  vpn?: InputMaybe<HomeProtonVpnInput>;
};

export type HomeProtonMail = {
  __typename?: 'HomeProtonMail';
  enable: Scalars['Boolean']['output'];
};

export type HomeProtonMailInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeProtonPass = {
  __typename?: 'HomeProtonPass';
  enable: Scalars['Boolean']['output'];
};

export type HomeProtonPassInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeProtonVpn = {
  __typename?: 'HomeProtonVPN';
  enable: Scalars['Boolean']['output'];
};

export type HomeProtonVpnInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeServices = {
  __typename?: 'HomeServices';
  media: HomeMediaServices;
  system: HomeSystemServices;
};

export type HomeServicesInput = {
  media?: InputMaybe<HomeMediaInput>;
};

export type HomeShell = {
  __typename?: 'HomeShell';
  fish: HomeFish;
};

export type HomeShellInput = {
  fish?: InputMaybe<HomeFishInput>;
};

export type HomeSystemServices = {
  __typename?: 'HomeSystemServices';
  udiskie: HomeUdiskie;
};

export type HomeTerminal = {
  __typename?: 'HomeTerminal';
  shell?: Maybe<HomeShell>;
};

export type HomeTerminalInput = {
  shell?: InputMaybe<HomeShellInput>;
};

export type HomeUdiskie = {
  __typename?: 'HomeUdiskie';
  enable: Scalars['Boolean']['output'];
};

export type HomeVsCode = {
  __typename?: 'HomeVSCode';
  enable: Scalars['Boolean']['output'];
};

export type HomeVsCodeInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeWaybar = {
  __typename?: 'HomeWaybar';
  enable: Scalars['Boolean']['output'];
};

export type HomeWaybarInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeWayland = {
  __typename?: 'HomeWayland';
  hyprland: HomeHyprland;
  waybar: HomeWaybar;
};

export type HomeWaylandInput = {
  hyprland?: InputMaybe<Scalars['Boolean']['input']>;
  waybar?: InputMaybe<HomeWaybarInput>;
};

export type HomeWezterm = {
  __typename?: 'HomeWezterm';
  enable: Scalars['Boolean']['output'];
};

export type HomeWeztermInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeZathura = {
  __typename?: 'HomeZathura';
  enable: Scalars['Boolean']['output'];
};

export type HomeZathuraInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Hosting = {
  __typename?: 'Hosting';
  website: Website;
};

export type HostingInput = {
  website?: InputMaybe<WebsiteInput>;
};

export type Hydra = {
  __typename?: 'Hydra';
  enable: Scalars['Boolean']['output'];
};

export type HydraInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Hyprland = {
  __typename?: 'Hyprland';
  enable: Scalars['Boolean']['output'];
};

export type HyprlandInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type KdeConnect = {
  __typename?: 'KdeConnect';
  enable: Scalars['Boolean']['output'];
};

export type KdeConnectInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Keycloak = {
  __typename?: 'Keycloak';
  enable: Scalars['Boolean']['output'];
};

export type KeycloakInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Libvirtd = {
  __typename?: 'Libvirtd';
  enable: Scalars['Boolean']['output'];
};

export type LibvirtdInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Locale = {
  __typename?: 'Locale';
  defaultLocale: Scalars['String']['output'];
  supportedLocales: Array<Scalars['String']['output']>;
  timeZone: Scalars['String']['output'];
};

export type LocaleInput = {
  defaultLocale?: InputMaybe<Scalars['String']['input']>;
  supportedLocales?: InputMaybe<Array<Scalars['String']['input']>>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type Minecraft = {
  __typename?: 'Minecraft';
  enable: Scalars['Boolean']['output'];
};

export type MinecraftInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateHomeConfig: Device;
  updateSystemConfig: Device;
};


export type MutationUpdateHomeConfigArgs = {
  updateDeviceInput: UpdateHomeConfigInput;
};


export type MutationUpdateSystemConfigArgs = {
  updateDeviceInput: UpdateSystemConfigInput;
};

export type Mysql = {
  __typename?: 'Mysql';
  enable: Scalars['Boolean']['output'];
};

export type MysqlInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Network = {
  __typename?: 'Network';
  domain: Scalars['String']['output'];
  services: NetworkServices;
};

export type NetworkInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<NetworkServicesInput>;
};

export type NetworkServices = {
  __typename?: 'NetworkServices';
  enableAvahi: Scalars['Boolean']['output'];
  enableNetworkManager: Scalars['Boolean']['output'];
  enableResolved: Scalars['Boolean']['output'];
};

export type NetworkServicesInput = {
  enableAvahi?: InputMaybe<Scalars['Boolean']['input']>;
  enableNetworkManager?: InputMaybe<Scalars['Boolean']['input']>;
  enableResolved?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Nginx = {
  __typename?: 'Nginx';
  enable: Scalars['Boolean']['output'];
};

export type NginxInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NixConfigurator = {
  __typename?: 'NixConfigurator';
  enable: Scalars['Boolean']['output'];
};

export type NixConfiguratorInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Plasma6 = {
  __typename?: 'Plasma6';
  enable: Scalars['Boolean']['output'];
};

export type Plasma6Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Podman = {
  __typename?: 'Podman';
  enable: Scalars['Boolean']['output'];
};

export type PodmanInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Postgresql = {
  __typename?: 'Postgresql';
  enable: Scalars['Boolean']['output'];
};

export type PostgresqlInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  device: DeviceConfig;
  devices: Array<Device>;
};


export type QueryDeviceArgs = {
  hostname: Scalars['String']['input'];
};

export type SecurityRules = {
  __typename?: 'SecurityRules';
  enable: Scalars['Boolean']['output'];
};

export type SecurityRulesInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Server = {
  __typename?: 'Server';
  auth: Auth;
  cache: Cache;
  databases: Databases;
  git: GitServer;
  hosting: Hosting;
  hydra: Hydra;
  minecraft: Minecraft;
  nixConfigurator: NixConfigurator;
  services: Services;
  teamspeak: Teamspeak;
};

export type ServerInput = {
  auth?: InputMaybe<AuthInput>;
  cache?: InputMaybe<CacheInput>;
  databases?: InputMaybe<DatabasesInput>;
  git?: InputMaybe<GitServerInput>;
  hosting?: InputMaybe<HostingInput>;
  hydra?: InputMaybe<HydraInput>;
  minecraft?: InputMaybe<MinecraftInput>;
  nixConfigurator?: InputMaybe<NixConfiguratorInput>;
  services?: InputMaybe<ServicesInput>;
  teamspeak?: InputMaybe<TeamspeakInput>;
};

export type Services = {
  __typename?: 'Services';
  fail2ban: Fail2ban;
  headscale: Headscale;
  web: Web;
};

export type ServicesInput = {
  fail2ban?: InputMaybe<Fail2banInput>;
  headscale?: InputMaybe<HeadscaleInput>;
  web?: InputMaybe<WebInput>;
};

export type Shells = {
  __typename?: 'Shells';
  fish: Fish;
  zsh: Zsh;
};

export type ShellsInput = {
  fish?: InputMaybe<FishInput>;
  zsh?: InputMaybe<ZshInput>;
};

export type Sway = {
  __typename?: 'Sway';
  enable: Scalars['Boolean']['output'];
};

export type SwayInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemConfig = {
  __typename?: 'SystemConfig';
  build: Scalars['String']['output'];
  core: Core;
  desktop: Desktop;
  server: Server;
  utils: Utils;
};

export type SystemConfigInput = {
  core?: InputMaybe<CoreInput>;
  desktop?: InputMaybe<DesktopInput>;
  server?: InputMaybe<ServerInput>;
  utils?: InputMaybe<UtilsInput>;
};

export type Teamspeak = {
  __typename?: 'Teamspeak';
  enable: Scalars['Boolean']['output'];
};

export type TeamspeakInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateHomeConfigInput = {
  hostname: Scalars['String']['input'];
  type: ConfigType;
  /** Updated home config */
  updatedConfig: HomeConfigInput;
};

export type UpdateSystemConfigInput = {
  hostname: Scalars['String']['input'];
  type: ConfigType;
  /** Updated system config */
  updatedConfig: SystemConfigInput;
};

export type Utils = {
  __typename?: 'Utils';
  kdeconnect: KdeConnect;
  virtualisation: Virtualisation;
};

export type UtilsInput = {
  kdeconnect?: InputMaybe<KdeConnectInput>;
  virtualisation?: InputMaybe<VirtualisationInput>;
};

export type Virtualisation = {
  __typename?: 'Virtualisation';
  docker: Docker;
  libvirtd: Libvirtd;
  podman: Podman;
};

export type VirtualisationInput = {
  docker?: InputMaybe<DockerInput>;
  libvirtd?: InputMaybe<LibvirtdInput>;
  podman?: InputMaybe<PodmanInput>;
};

export type Wayland = {
  __typename?: 'Wayland';
  desktopManager: DesktopManager;
  displayManager: DisplayManager;
  windowManager: WindowManager;
};

export type WaylandInput = {
  desktopManager?: InputMaybe<DesktopManagerInput>;
  displayManager?: InputMaybe<DisplayManagerInput>;
  windowManager?: InputMaybe<WindowManagerInput>;
};

export type Web = {
  __typename?: 'Web';
  acme: Acme;
  nginx: Nginx;
};

export type WebInput = {
  acme?: InputMaybe<AcmeInput>;
  nginx?: InputMaybe<NginxInput>;
};

export type Website = {
  __typename?: 'Website';
  enable: Scalars['Boolean']['output'];
};

export type WebsiteInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WindowManager = {
  __typename?: 'WindowManager';
  hyprland: Hyprland;
  sway: Sway;
};

export type WindowManagerInput = {
  hyprland?: InputMaybe<HyprlandInput>;
  sway?: InputMaybe<SwayInput>;
};

export type Zsh = {
  __typename?: 'Zsh';
  enable: Scalars['Boolean']['output'];
};

export type ZshInput = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetDeviceDetailQueryVariables = Exact<{
  hostname: Scalars['String']['input'];
}>;


export type GetDeviceDetailQuery = { __typename?: 'Query', device: { __typename?: 'DeviceConfig', hostname: string, systemConfig?: { __typename?: 'SystemConfig', core: { __typename?: 'Core', disableDefaults: boolean, locale: { __typename?: 'Locale', defaultLocale: string, supportedLocales: Array<string>, timeZone: string }, network: { __typename?: 'Network', domain: string, services: { __typename?: 'NetworkServices', enableAvahi: boolean, enableNetworkManager: boolean, enableResolved: boolean } }, securityRules: { __typename?: 'SecurityRules', enable: boolean }, shells: { __typename?: 'Shells', fish: { __typename?: 'Fish', enable: boolean }, zsh: { __typename?: 'Zsh', enable: boolean } } }, desktop: { __typename?: 'Desktop', gamemode: { __typename?: 'Gamemode', enable: boolean }, wayland: { __typename?: 'Wayland', desktopManager: { __typename?: 'DesktopManager', gnome: { __typename?: 'Gnome', enable: boolean }, plasma6: { __typename?: 'Plasma6', enable: boolean } }, displayManager: { __typename?: 'DisplayManager', gdm: { __typename?: 'GDM', enable: boolean } }, windowManager: { __typename?: 'WindowManager', hyprland: { __typename?: 'Hyprland', enable: boolean }, sway: { __typename?: 'Sway', enable: boolean } } } }, server: { __typename?: 'Server', auth: { __typename?: 'Auth', freeipa: { __typename: 'FreeIPA', enable: boolean }, keycloak: { __typename: 'Keycloak', enable: boolean } }, cache: { __typename: 'Cache', enable: boolean }, databases: { __typename?: 'Databases', mysql: { __typename: 'Mysql', enable: boolean }, postgresql: { __typename: 'Postgresql', enable: boolean } }, git: { __typename?: 'GitServer', daemon: { __typename: 'GitDaemon', enable: boolean }, cgit: { __typename: 'CGit', enable: boolean } }, hosting: { __typename?: 'Hosting', website: { __typename?: 'Website', enable: boolean } }, hydra: { __typename: 'Hydra', enable: boolean }, minecraft: { __typename: 'Minecraft', enable: boolean }, nixConfigurator: { __typename: 'NixConfigurator', enable: boolean }, services: { __typename?: 'Services', fail2ban: { __typename: 'Fail2ban', enable: boolean }, headscale: { __typename: 'Headscale', enable: boolean }, web: { __typename?: 'Web', acme: { __typename?: 'Acme', enable: boolean }, nginx: { __typename?: 'Nginx', enable: boolean } } }, teamspeak: { __typename: 'Teamspeak', enable: boolean } }, utils: { __typename?: 'Utils', kdeconnect: { __typename?: 'KdeConnect', enable: boolean }, virtualisation: { __typename?: 'Virtualisation', docker: { __typename?: 'Docker', enable: boolean }, podman: { __typename?: 'Podman', enable: boolean }, libvirtd: { __typename?: 'Libvirtd', enable: boolean } } } } | null, homeConfig?: { __typename?: 'HomeConfig', desktop?: { __typename?: 'HomeDesktop', programs: { __typename?: 'HomePrograms', browsers?: { __typename?: 'HomeBrowsers', brave: { __typename?: 'HomeBrave', enable: boolean }, chromium: { __typename?: 'HomeChromium', enable: boolean }, firefox: { __typename?: 'HomeFirefox', enable: boolean } } | null, editors?: { __typename?: 'HomeEditors', vscode: { __typename?: 'HomeVSCode', enable: boolean } } | null, emulators?: { __typename?: 'HomeEmulators', alacritty?: { __typename?: 'HomeAlacritty', enable: boolean } | null, kitty?: { __typename?: 'HomeKitty', enable: boolean } | null, wezterm?: { __typename?: 'HomeWezterm', enable: boolean } | null } | null, games?: { __typename?: 'HomeGames', lutris: { __typename?: 'HomeLutris', enable: boolean }, minecraft: { __typename?: 'HomeMinecraft', enable: boolean } } | null, media?: { __typename?: 'HomeMedia', mpv: { __typename?: 'HomeMPV', enable: boolean } } | null, productivity?: { __typename?: 'HomeProductivity', proton: { __typename?: 'HomeProton', mail?: { __typename: 'HomeProtonMail', enable: boolean } | null, pass?: { __typename: 'HomeProtonPass', enable: boolean } | null, vpn?: { __typename: 'HomeProtonVPN', enable: boolean } | null }, zathura: { __typename?: 'HomeZathura', enable: boolean } } | null }, services: { __typename?: 'HomeDesktopServices', kdeconnect: { __typename?: 'HomeKdeConnect', enable: boolean }, mako: { __typename?: 'HomeMako', enable: boolean }, polkit_agent: { __typename?: 'HomeKdeConnect', enable: boolean } }, wayland?: { __typename?: 'HomeWayland', hyprland: { __typename?: 'HomeHyprland', enable: boolean, settings: { __typename?: 'HomeHyprlandSettings', mod: string }, plugins: { __typename?: 'HomeHyprlandPlugins', hyprsplit: { __typename?: 'HomeHyprSplit', enable: boolean, numberOfWorkspaces: number } } }, waybar: { __typename?: 'HomeWaybar', enable: boolean } } | null } | null, services?: { __typename?: 'HomeServices', media: { __typename?: 'HomeMediaServices', playerctl: { __typename?: 'HomePlayerctl', enable: boolean } }, system: { __typename?: 'HomeSystemServices', udiskie: { __typename?: 'HomeUdiskie', enable: boolean } } } | null, terminal?: { __typename?: 'HomeTerminal', shell?: { __typename?: 'HomeShell', fish: { __typename?: 'HomeFish', enable: boolean } } | null } | null } | null } };

export type HomeDesktopConfigFragment = { __typename?: 'HomeDesktop', programs: { __typename?: 'HomePrograms', browsers?: { __typename?: 'HomeBrowsers', brave: { __typename?: 'HomeBrave', enable: boolean }, chromium: { __typename?: 'HomeChromium', enable: boolean }, firefox: { __typename?: 'HomeFirefox', enable: boolean } } | null, editors?: { __typename?: 'HomeEditors', vscode: { __typename?: 'HomeVSCode', enable: boolean } } | null, emulators?: { __typename?: 'HomeEmulators', alacritty?: { __typename?: 'HomeAlacritty', enable: boolean } | null, kitty?: { __typename?: 'HomeKitty', enable: boolean } | null, wezterm?: { __typename?: 'HomeWezterm', enable: boolean } | null } | null, games?: { __typename?: 'HomeGames', lutris: { __typename?: 'HomeLutris', enable: boolean }, minecraft: { __typename?: 'HomeMinecraft', enable: boolean } } | null, media?: { __typename?: 'HomeMedia', mpv: { __typename?: 'HomeMPV', enable: boolean } } | null, productivity?: { __typename?: 'HomeProductivity', proton: { __typename?: 'HomeProton', mail?: { __typename: 'HomeProtonMail', enable: boolean } | null, pass?: { __typename: 'HomeProtonPass', enable: boolean } | null, vpn?: { __typename: 'HomeProtonVPN', enable: boolean } | null }, zathura: { __typename?: 'HomeZathura', enable: boolean } } | null }, services: { __typename?: 'HomeDesktopServices', kdeconnect: { __typename?: 'HomeKdeConnect', enable: boolean }, mako: { __typename?: 'HomeMako', enable: boolean }, polkit_agent: { __typename?: 'HomeKdeConnect', enable: boolean } }, wayland?: { __typename?: 'HomeWayland', hyprland: { __typename?: 'HomeHyprland', enable: boolean, settings: { __typename?: 'HomeHyprlandSettings', mod: string }, plugins: { __typename?: 'HomeHyprlandPlugins', hyprsplit: { __typename?: 'HomeHyprSplit', enable: boolean, numberOfWorkspaces: number } } }, waybar: { __typename?: 'HomeWaybar', enable: boolean } } | null };

export type HomeServicesConfigFragment = { __typename?: 'HomeServices', media: { __typename?: 'HomeMediaServices', playerctl: { __typename?: 'HomePlayerctl', enable: boolean } }, system: { __typename?: 'HomeSystemServices', udiskie: { __typename?: 'HomeUdiskie', enable: boolean } } };

export type HomeTerminalConfigFragment = { __typename?: 'HomeTerminal', shell?: { __typename?: 'HomeShell', fish: { __typename?: 'HomeFish', enable: boolean } } | null };

export type CoreConfigFragment = { __typename?: 'Core', disableDefaults: boolean, locale: { __typename?: 'Locale', defaultLocale: string, supportedLocales: Array<string>, timeZone: string }, network: { __typename?: 'Network', domain: string, services: { __typename?: 'NetworkServices', enableAvahi: boolean, enableNetworkManager: boolean, enableResolved: boolean } }, securityRules: { __typename?: 'SecurityRules', enable: boolean }, shells: { __typename?: 'Shells', fish: { __typename?: 'Fish', enable: boolean }, zsh: { __typename?: 'Zsh', enable: boolean } } };

export type DesktopConfigFragment = { __typename?: 'Desktop', gamemode: { __typename?: 'Gamemode', enable: boolean }, wayland: { __typename?: 'Wayland', desktopManager: { __typename?: 'DesktopManager', gnome: { __typename?: 'Gnome', enable: boolean }, plasma6: { __typename?: 'Plasma6', enable: boolean } }, displayManager: { __typename?: 'DisplayManager', gdm: { __typename?: 'GDM', enable: boolean } }, windowManager: { __typename?: 'WindowManager', hyprland: { __typename?: 'Hyprland', enable: boolean }, sway: { __typename?: 'Sway', enable: boolean } } } };

export type ServerConfigFragment = { __typename?: 'Server', auth: { __typename?: 'Auth', freeipa: { __typename: 'FreeIPA', enable: boolean }, keycloak: { __typename: 'Keycloak', enable: boolean } }, cache: { __typename: 'Cache', enable: boolean }, databases: { __typename?: 'Databases', mysql: { __typename: 'Mysql', enable: boolean }, postgresql: { __typename: 'Postgresql', enable: boolean } }, git: { __typename?: 'GitServer', daemon: { __typename: 'GitDaemon', enable: boolean }, cgit: { __typename: 'CGit', enable: boolean } }, hosting: { __typename?: 'Hosting', website: { __typename?: 'Website', enable: boolean } }, hydra: { __typename: 'Hydra', enable: boolean }, minecraft: { __typename: 'Minecraft', enable: boolean }, nixConfigurator: { __typename: 'NixConfigurator', enable: boolean }, services: { __typename?: 'Services', fail2ban: { __typename: 'Fail2ban', enable: boolean }, headscale: { __typename: 'Headscale', enable: boolean }, web: { __typename?: 'Web', acme: { __typename?: 'Acme', enable: boolean }, nginx: { __typename?: 'Nginx', enable: boolean } } }, teamspeak: { __typename: 'Teamspeak', enable: boolean } };

export type UtilsConfigFragment = { __typename?: 'Utils', kdeconnect: { __typename?: 'KdeConnect', enable: boolean }, virtualisation: { __typename?: 'Virtualisation', docker: { __typename?: 'Docker', enable: boolean }, podman: { __typename?: 'Podman', enable: boolean }, libvirtd: { __typename?: 'Libvirtd', enable: boolean } } };

export type DeviceItemFragment = { __typename: 'Device', hostname: string, isOnline: boolean, ip: string };

export type ListDevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDevicesQuery = { __typename?: 'Query', devices: Array<{ __typename: 'Device', hostname: string, isOnline: boolean, ip: string }> };

export type UpdateSystemConfigMutationVariables = Exact<{
  updateDeviceInput: UpdateSystemConfigInput;
}>;


export type UpdateSystemConfigMutation = { __typename?: 'Mutation', updateSystemConfig: { __typename?: 'Device', hostname: string } };

export type UpdateHomeConfigMutationVariables = Exact<{
  updateDeviceInput: UpdateHomeConfigInput;
}>;


export type UpdateHomeConfigMutation = { __typename?: 'Mutation', updateHomeConfig: { __typename?: 'Device', hostname: string } };

export const HomeDesktopConfigFragmentDoc = gql`
    fragment HomeDesktopConfig on HomeDesktop {
  programs {
    browsers {
      brave {
        enable
      }
      chromium {
        enable
      }
      firefox {
        enable
      }
    }
    editors {
      vscode {
        enable
      }
    }
    emulators {
      alacritty {
        enable
      }
      kitty {
        enable
      }
      wezterm {
        enable
      }
    }
    games {
      lutris {
        enable
      }
      minecraft {
        enable
      }
    }
    media {
      mpv {
        enable
      }
    }
    productivity {
      proton {
        mail {
          enable
          __typename
        }
        pass {
          enable
          __typename
        }
        vpn {
          enable
          __typename
        }
      }
      zathura {
        enable
      }
    }
  }
  services {
    kdeconnect {
      enable
    }
    mako {
      enable
    }
    polkit_agent {
      enable
    }
  }
  wayland {
    hyprland {
      enable
      settings {
        mod
      }
      plugins {
        hyprsplit {
          enable
          numberOfWorkspaces
        }
      }
    }
    waybar {
      enable
    }
  }
}
    `;
export const HomeServicesConfigFragmentDoc = gql`
    fragment HomeServicesConfig on HomeServices {
  media {
    playerctl {
      enable
    }
  }
  system {
    udiskie {
      enable
    }
  }
}
    `;
export const HomeTerminalConfigFragmentDoc = gql`
    fragment HomeTerminalConfig on HomeTerminal {
  shell {
    fish {
      enable
    }
  }
}
    `;
export const CoreConfigFragmentDoc = gql`
    fragment CoreConfig on Core {
  locale {
    defaultLocale
    supportedLocales
    timeZone
  }
  network {
    domain
    services {
      enableAvahi
      enableNetworkManager
      enableResolved
    }
  }
  disableDefaults
  securityRules {
    enable
  }
  shells {
    fish {
      enable
    }
    zsh {
      enable
    }
  }
}
    `;
export const DesktopConfigFragmentDoc = gql`
    fragment DesktopConfig on Desktop {
  gamemode {
    enable
  }
  wayland {
    desktopManager {
      gnome {
        enable
      }
      plasma6 {
        enable
      }
    }
    displayManager {
      gdm {
        enable
      }
    }
    windowManager {
      hyprland {
        enable
      }
      sway {
        enable
      }
    }
  }
}
    `;
export const ServerConfigFragmentDoc = gql`
    fragment ServerConfig on Server {
  auth {
    freeipa {
      enable
      __typename
    }
    keycloak {
      enable
      __typename
    }
  }
  cache {
    enable
    __typename
  }
  databases {
    mysql {
      enable
      __typename
    }
    postgresql {
      enable
      __typename
    }
  }
  git {
    daemon {
      enable
      __typename
    }
    cgit {
      enable
      __typename
    }
  }
  hosting {
    website {
      enable
    }
  }
  hydra {
    enable
    __typename
  }
  minecraft {
    enable
    __typename
  }
  nixConfigurator {
    enable
    __typename
  }
  services {
    fail2ban {
      enable
      __typename
    }
    headscale {
      enable
      __typename
    }
    web {
      acme {
        enable
      }
      nginx {
        enable
      }
    }
  }
  teamspeak {
    enable
    __typename
  }
}
    `;
export const UtilsConfigFragmentDoc = gql`
    fragment UtilsConfig on Utils {
  kdeconnect {
    enable
  }
  virtualisation {
    docker {
      enable
    }
    podman {
      enable
    }
    libvirtd {
      enable
    }
  }
}
    `;
export const DeviceItemFragmentDoc = gql`
    fragment DeviceItem on Device {
  hostname
  isOnline
  ip
  __typename
}
    `;
export const GetDeviceDetailDocument = gql`
    query GetDeviceDetail($hostname: String!) {
  device(hostname: $hostname) {
    hostname
    systemConfig {
      core {
        ...CoreConfig
      }
      desktop {
        ...DesktopConfig
      }
      server {
        ...ServerConfig
      }
      utils {
        ...UtilsConfig
      }
    }
    homeConfig {
      desktop {
        ...HomeDesktopConfig
      }
      services {
        ...HomeServicesConfig
      }
      terminal {
        ...HomeTerminalConfig
      }
    }
  }
}
    ${CoreConfigFragmentDoc}
${DesktopConfigFragmentDoc}
${ServerConfigFragmentDoc}
${UtilsConfigFragmentDoc}
${HomeDesktopConfigFragmentDoc}
${HomeServicesConfigFragmentDoc}
${HomeTerminalConfigFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDeviceDetailGQL extends Apollo.Query<GetDeviceDetailQuery, GetDeviceDetailQueryVariables> {
    override document = GetDeviceDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListDevicesDocument = gql`
    query ListDevices {
  devices {
    ...DeviceItem
  }
}
    ${DeviceItemFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ListDevicesGQL extends Apollo.Query<ListDevicesQuery, ListDevicesQueryVariables> {
    override document = ListDevicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSystemConfigDocument = gql`
    mutation UpdateSystemConfig($updateDeviceInput: UpdateSystemConfigInput!) {
  updateSystemConfig(updateDeviceInput: $updateDeviceInput) {
    hostname
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSystemConfigGQL extends Apollo.Mutation<UpdateSystemConfigMutation, UpdateSystemConfigMutationVariables> {
    override document = UpdateSystemConfigDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateHomeConfigDocument = gql`
    mutation UpdateHomeConfig($updateDeviceInput: UpdateHomeConfigInput!) {
  updateHomeConfig(updateDeviceInput: $updateDeviceInput) {
    hostname
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateHomeConfigGQL extends Apollo.Mutation<UpdateHomeConfigMutation, UpdateHomeConfigMutationVariables> {
    override document = UpdateHomeConfigDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }