import { ControlType } from '@joka00.dev/libs/data-access';
import { last } from 'rxjs';

export const DESCRIPTIONS_HOME = [
  {
    key: 'desktop',
    label: 'Desktop',
    children: [
      {
        key: 'enable',
        label: 'Enable desktop environment',
        controlType: ControlType.checkbox,
      },
      {
        key: 'programs',
        label: 'Programs that can be installed on this computer',
        children: [
          {
            key: 'browsers',
            label: 'Browsers',
            children: [
              {
                key: 'brave',
                label: 'Brave',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Brave browser',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
              {
                key: 'chromium',
                label: 'Chromium',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Chromium browser',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
              {
                key: 'firefox',
                label: 'Firefox',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Firefox browser',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
            ],
          },
          {
            key: 'editors',
            label: 'Text editors',
            children: [
              {
                key: 'code',
                label: 'Visual Studio Code',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Visual Studio Code',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
            ],
          },
          {
            key: 'games',
            label: 'Posibility to install few games or managers',
            children: [
              {
                key: 'lutris',
                label: 'Lutris',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Lutris game manager',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
              {
                key: 'minecraft',
                label: 'Minecraft',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Minecraft game launcher',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
            ],
          },
          {
            key: 'media',
            label: 'Options for meadia focused programs',
            children: [
              {
                key: 'mpv',
                label: 'MPV player',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable MPV player',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
            ],
          },
          {
            key: 'productivity',
            label: 'Productivity tools',
            children: [
              {
                key: 'zathura',
                label: 'Zathura PDF reader',
                children: [
                  {
                    key: 'enable',
                    label: 'Enable Zathura PDF reader',
                    controlType: ControlType.checkbox,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        key: 'wayland',
        label: 'Options connected with wayland',
        children: [
          {
            key: 'hyprland',
            label: 'Options to set Hyprland',
            children: [
              {
                key: 'enable',
                label: 'Enable Hyprland',
                controlType: ControlType.checkbox,
              },
              {
                key: 'settings',
                label: 'Settings for Hyprland',
                children: [
                  {
                    key: 'mod',
                    label: 'Mod key for Hyprland',
                    controType: ControlType.text,
                  },
                ],
              },
              {
                key: 'plugins',
                label: 'Plugins for Hyprland',
                children: [
                  {
                    key: 'hyprsplit',
                    label: 'Hyprsplit plugin',
                    children: [
                      {
                        key: 'enable',
                        label: 'Enable Hyprsplit plugin',
                        controlType: ControlType.checkbox,
                      },
                      {
                        key: 'numberOfWorkspaces',
                        label: 'Number of workspaces',
                        controlType: ControlType.text,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 'waybar',
            label: 'Options to control waybar',
            children: [
              {
                key: 'enable',
                label: 'Enable waybar',
                controlType: ControlType.checkbox,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'services',
    label: 'Services that can be enabled on this computer',
    children: [
      {
        key: 'media',
        label: 'Options for meadia focused services',
        children: [
          {
            key: 'playerctl',
            label: 'Playerctl service',
            children: [
              {
                key: 'enable',
                label: 'Enable Playerctl service',
                controlType: ControlType.checkbox,
              },
            ],
          },
        ],
      },
      {
        key: 'system',
        label: 'System services',
        children: [
          {
            key: 'udiskie',
            label: 'Udiskie tool, automatic disk mount',
            children: [
              {
                key: 'enable',
                label: 'Enable udiskie',
                controlType: ControlType.checkbox,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'terminal',
    label: 'Terminal settings and applications',
    children: [
      {
        key: 'shell',
        label: 'Shell settings',
        children: [
          {
            key: 'fish',
            label: 'Fish shell',
            children: [
              {
                key: 'enable',
                label: 'Enable company settings for Fish shell',
                controlType: ControlType.checkbox,
              },
            ],
          },
        ],
      },
    ],
  },
];
