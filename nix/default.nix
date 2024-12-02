{
  self,
  lib,
  config,
  dream2nix,
  ...
}: {
  imports = [
    dream2nix.modules.dream2nix.nodejs-package-lock-v3
    dream2nix.modules.dream2nix.nodejs-granular-v3
  ];

  mkDerivation = {
    src = ../.;
    nativeBuildInputs = [config.deps.nodejs_22];

    installPhase = ''
      mkdir -p $out
      cp -r dist/${config.name}/browser $out/
    '';
  };
  deps = {nixpkgs, ...}: {
    inherit
      (nixpkgs)
      fetchFromGitHub
      stdenv
      nodejs_22
      coreutils
      ;
  };

  nodejs-package-lock-v3 = {
    packageLockFile = "${config.mkDerivation.src}/package-lock.json";
  };
  nodejs-granular-v3 = {
    runBuild = true;
    buildScript = "NG_FORCE_TTY=false npm run build";
  };

  name = "nix-configurator-web";
  version = "0.0.1";
}
