import { useConnect } from "@stacks/connect-react";
import { StacksDevnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
} from "@stacks/transactions";

import { userSession } from "../user-session";

const ContractCallVote = () => {
  const { doContractCall, doSTXTransfer } = useConnect();

  
  function vote(pick) {
    doSTXTransfer({
      amount: 1000000,
      recipient: "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK",
      network: new StacksDevnet(),
      anchorMode: AnchorMode.Any,
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div>
      <p>Vote via Smart Contract</p>
      <button className="Vote" onClick={() => vote("🍊")}>
        transfer to 🍊
      </button>
      <button className="Vote" onClick={() => vote("🍎")}>
        transfer to 🍎
      </button>
    </div>
  );
};

export default ContractCallVote;
