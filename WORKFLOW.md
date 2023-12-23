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

3. read commands from config
4. file generator depending on template
5. register project in npm
6. vscode extension spike
7. watch command spike
8. read config from external projects
9. plugins spike
10. catalog generator (V2)
