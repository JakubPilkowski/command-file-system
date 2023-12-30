1. create basic readConfig - done
2. createCommands (file only):

   - Problems:
     - we don't know the structure of future command for now and we don't know whether it is possible
     - to save yargs.commands in cache
     - we dont't if we can pass dynamic args
     - maybe we can start watcher on init and invoke commands
   - Spikes:
     - test dynamic args in gfs gc - done
     - test saving yargs.commands in cache - done
     - if not possible spike watchers and invoking commands in watcher - for now we can skip it

3. read commands from config - done
4. file generator depending on template - done
5. register project in npm - done
6. read config from external projects - in progress
7. benchmark script
8. watch command spike
9. plugins spike (vscode, typescript, react plugins)
10. implement simple tests (end of V1 version)
11. OOP project
    V2
12. split into config (include, exclude) and templates (plugins, templates, etc) (V2)
13. vscode extension spike (idk if i should do it now) (V2)
14. Rust implementation (V2)
15. catalog generator (V2)
16. config merge (multiple configs) (V2)

V2/V3 ideas
// TODO: init command which will create base config
// TODO: add logging support
// TODO: verbose mode
// TODO: no cache mode
// TODO: cache clear command
