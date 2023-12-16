1. create basic readConfig - done
2. createCommands (file only):

   - Problems:
     - we don't know the structure of future command for now and we don't know whether it is possible
     - to save yargs.commands in cache
     - we dont't if we can pass dynamic args
     - maybe we can start watcher on init and invoke commands
   - Spikes:
     - test dynamic args in gfs gc
     - test saving yargs.commands in cache
     - if not possible spike watchers and invoking commands in watcher

3. add command to yargs instance (is this necessary)
4. save to some kind of cache

5. sample catalog generating from config
6. Command class for easy command generation (maybe)
7. register project in npm
8. read config from external projects
9. add plugins (template plugins, vscode plugin??)
10. CLI for creating external project config file
11. vscode extension ???
