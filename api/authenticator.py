import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.players import PlayerRepository, PlayerOut, PlayerOutWithPassword


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        players: PlayerRepository,
    ):
        # Use your repo to get the account based on the
        # username (which could be an email)
        return players.get(username)

    def get_account_getter(
        self,
        players: PlayerRepository = Depends(),
    ):
        # Return the accounts. That's it.
        return players

    def get_hashed_password(self, player: PlayerOutWithPassword):
        # Return the encrypted password value from your
        # account object
        return player.hashed_password

    def get_account_data_for_cookie(self, player: PlayerOut):
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return player.username, PlayerOut(**player.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
