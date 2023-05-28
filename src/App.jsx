import './index.css';
//task 1
import { Profile } from "./components/profile/Profile";
import user from "./components/profile/user.json";
//task 2
import { Stats } from './components/statistic/statistic';
import data from './components/statistic/data.json'
//task 3
import { FriendsList } from './components/friends/FriendsList';
import friends from './components/friends/friends.json';
//Task 4
import { TransactionHistory } from './components/transaction/TransactionHistory';
import transactions from './components/transaction/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats
        title='UPLOAD STATS'
        stats={data}
      />
      <Stats
        stats={data}
      />

      <FriendsList
        friends={friends}
      />
      <TransactionHistory
        data={transactions}
      />
    </>
  )
}


