{
  perSystem = {
    config,
    pkgs,
    ...
  }: {
    devShells.default = pkgs.mkShell {
      NIX_CONFIG = "extra-experimental-features = nix-command flakes ca-derivations";
      packages = with pkgs; [
        nix
        git
        python3
        nodejs_22
        # nodePackages."@angular/cli"
      ];
      # shellHook = ''
      # ${pkgs.nodePackages."@angular/cli"}/bin/ng config -g cli.packageManager npm}
      # '';
    };
    formatter = pkgs.alejandra;
  };
}
