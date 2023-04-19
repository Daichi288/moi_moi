import Particles, { IParticlesProps } from 'solid-particles';
import { loadFull } from 'tsparticles';
import imgChun from '../../assets/images/ma-jan_chun.png';
import imgHaku from '../../assets/images/ma-jan_haku.png';
import imgHatsu from '../../assets/images/ma-jan_hatsu.png';
import imgTon from '../../assets/images/ma-jan_ton.png';
import imgNan from '../../assets/images/ma-jan_nan.png';
import imgSha from '../../assets/images/ma-jan_sha.png';
import imgPe from '../../assets/images/ma-jan_pe.png';
import { Component } from 'solid-js';

type GlobalCompositeOperation = 'color' | 'color-burn' | 'color-dodge' | 'copy' | 'darken' | 'destination-atop' | 'destination-in' | 'destination-out' | 'destination-over' | 'difference' | 'exclusion' | 'hard-light' | 'hue' | 'lighten' | 'lighter' | 'luminosity' | 'multiply' | 'overlay' | 'saturation' | 'screen' | 'soft-light' | 'source-atop' | 'source-in' | 'source-out' | 'source-over' | 'xor';
type InteractivityDetectType = 'canvas' | 'parent' | 'window';
type EventDivType = 'circle' | 'rectangle';
type CollisionMode = 'absorb' | 'bounce' | 'destroy';
type DestroyType = 'none' | 'min' | 'max';
type StartValueType = 'random' | 'min' | 'max';
type RotateDirection = 'clockwise' | 'counter-clockwise' | 'random';
type OutMode = 'none' | 'bounce' | 'out' | 'destroy' | 'split' | 'bounce-horizontal' | 'bounce-vertical';
type DirectionType = 'none';

const BACKGROUND_COLOR = '#FFFFFF';

const IMAGES = [
  imgChun,
  imgHaku,
  imgHatsu,
  imgTon,
  imgNan,
  imgSha,
  imgPe,
];

const backGround = {
  image: '',
  position: '50% 50%',
  repeat: 'no-repeat',
  size: 'cover',
  opacity: 1,
};

const backgroundMask = {
  composite: 'destination-out' as GlobalCompositeOperation,
  cover: {
    color: {
      value: BACKGROUND_COLOR,
    },
    opacity: 1,
  },
  enable: false,
};

const fullScreen = {
  enable: true,
  zIndex: 0,
};

const interactivity = {
  detectsOn: 'window' as InteractivityDetectType,
  events: {
    onClick: {
      enable: true,
      mode: 'push',
    },
    onDiv: {
      selectors: '#repulse-div',
      enable: false,
      mode: 'repulse',
      type: 'circle' as EventDivType,
    },
    onHover: {
      enable: true,
      mode: 'bubble',
      parallax: {
        enable: false,
        force: 60,
        smooth: 20,
      }
    },
    resize: true,
  },
  modes: {
    slow: {
      factor: 3,
      radius: 200,
    },
    attract: {
      distance: 200,
      duration: 0.4,
      easing: 'ease-out-quad',
      factor: 1,
      maxSpeed: 50,
      speed: 1,
    },
    bounce: {
      distance: 200,
    },
    bubble: {
      distance: 400,
      duration: 2,
      mix: false,
      opacity: 0.8,
      size: 18,
      divs: {
        distance: 200,
        duration: 0.8,
        mix: false,
        selectors: [],
      },
    },
    connect: {
      distance: 80,
      links: {
        opacity: 0.5,
      },
      radius: 60,
    },
    grab: {
      distance: 400,
      links: {
        blink: false,
        consent: false,
        opacity: 1,
      }
    },
    push: {
      default: true,
      groups: [],
      quantity: 0, /* クリック時に生成する画像ファイルの数 */
    },
    remove: {
      quantity: 2,
    },
    repulse: {
      distance: 200,
      duration: 0.4,
      factor: 100,
      speed: 1,
      maxSpeed: 50,
      easing: 'ease-out-quad',
      divs: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad',
        selectors: [],
      },
    },
    trail: {
      delay: 1,
      pauseOnStop: false,
      quantity: 1,
    },
    light: {
      area: {
        gradient: {
          start: {
            value: BACKGROUND_COLOR,
          },
          stop: {
            value: '#000000',
          },
        },
        radius: 1000,
      },
      shadow: {
        color: {
          value: '#000000',
        },
        length: 2000,
      }
    }
  },
};

const motion = {
  disable: false,
  reduce: {
    factor: 4,
    value: true,
  },
};

const horizontal = {
  random: {
    enable: false,
    minimumValue: 0.1,
  },
  value: 1,
};

const vertical = {
  random: {
    enable: false,
    minimumValue: 0.1,
  },
  value: 1,
};

const bounce = {
  horizontal,
  vertical,
}

const options = {
  autoPlay: true,
  background: backGround,
  backgroundMask: backgroundMask,
  fullScreen: fullScreen,
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: interactivity,
  manualParticles: [],
  motion: motion,
  particles: {
    bounce: bounce,
    collisions: {
      bounce: bounce,
      enable: false,
      mode: 'bounce' as CollisionMode,
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: BACKGROUND_COLOR,
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        }
      }
    },
    destroy: {
      mode: 'none' as 'none',
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: {
            min: 2,
            max: 5,
          }
        },
        sizeOffset: true
      }
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      center: {
        x: 50,
        y: 50,
        radius: 0
      },
      decay: 0,
      distance: {},
      direction: 'none' as DirectionType,
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: 'out' as OutMode,
        bottom: 'out' as OutMode,
        left: 'out' as OutMode,
        right: 'out' as OutMode,
        top: 'out' as OutMode,
      },
      random: false,
      size: false,
      speed: 1,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: BACKGROUND_COLOR,
        },
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 80,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1
      },
      value: {
        min: 0.1,
        max: 1
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        decay: 0,
        sync: false,
        destroy: 'none' as DestroyType,
        startValue: 'random' as StartValueType,
        minimumValue: 0.2
      }
    },
    reduceDuplicates: false,
    rotate: {
      random: {
        enable: true,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: true,
        speed: 5,
        decay: 0,
        sync: false
      },
      direction: 'random' as RotateDirection,
      path: false
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000'
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {
        character: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: 400
        },
        char: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: 400
        },
        polygon: {
          sides: 5
        },
        star: {
          sides: 5
        },
        image: IMAGES.map((img) => ({
          src: img,
          width: 12,
          height: 18,
        })),
        images: IMAGES.map((img) => ({
          src: img,
          width: 12,
          height: 18,
        })),
      },
      type: 'image'
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 10,
      animation: {
        count: 0,
        enable: false,
        speed: 40,
        decay: 0,
        sync: false,
        destroy: 'none' as DestroyType,
        startValue: 'random' as StartValueType,
        minimumValue: 0.1
      }
    },
    stroke: {
      width: 0,
      color: {
        value: '#000000',
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          }
        }
      }
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: vertical,
      speed: 25
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: 'clockwise',
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    links: {
      blink: false,
      color: {
        value: '#000'
      },
      consent: false,
      distance: 150,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: '#000'
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
};

const CustomParticles: Component = () => {
  return (
    <Particles
      /*@once*/
      id="particles"
      init={async (main) => await loadFull(main)}
      options={options}
    />
  )
}

export default CustomParticles;
