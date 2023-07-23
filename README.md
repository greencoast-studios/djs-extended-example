# Discord.js - Extended (Example)

This repo contains a very bare-bones example of a Discord bot that uses [discord.js-extended](https://github.com/greencoast-studios/discord.js-extended). If you need some more help, check out the [documentation](https://docs.greencoaststudios.com/discord.js-extended/master/)
for this framework.

You may use this to inspire yourself when building your own bot or check out any of the other bots implemented with this:

* [discord-downtime-notifier](https://github.com/moonstar-x/discord-downtime-notifier)
* [discord-free-games-notifier](https://github.com/moonstar-x/discord-free-games-notifier)
* [discord-music-24-7](https://github.com/moonstar-x/discord-music-24-7)
* [discord-tts-bot](https://github.com/moonstar-x/discord-tts-bot)

## Note

As you may (or may not) have noticed, inside the `package.json` file there is no dependency for `@greencoast/discord.js-extended`. This is because this repo is used for local manual testing using `npm link`. In your case, you should install `@greencoast/discord.js-extended`
to use this properly.

* The entrypoint is `index.js`.
* Commands are defined in the `commands` folder.
* An example JSON config file is located in the `config` folder (though incomplete since secrets are actually set through environment variables).
* An example of a sharded client entrypoint in `sharded-client.js`.
* An example of a command deploy script in `command-deploy.js`.

## Author

This bot was made by [Greencoast Studios](https://greencoaststudios.com).
