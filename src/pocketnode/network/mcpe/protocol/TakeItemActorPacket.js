const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class TakeItemActorPacket extends DataPacket {

    static getId() {
        return ProtocolInfo.TAKE_ITEM_ACTOR_PACKET;
    }

    initVars(){
        /** @type {number} */
        this.target = -1;
        /** @type {number} */
        this.eid = -1;
    }

    constructor(){
        super();
        this.initVars();
    }

    _decodePayload() {
        this.target = this.getEntityRuntimeId();
        this.eid = this.getEntityRuntimeId();
    }

    _encodePayload() {
        this.writeEntityRuntimeId(this.target);
        this.writeEntityRuntimeId(this.eid);
    }

    handle(session) {
        return session.handleTakeItemActor(this);
    }
}
module.exports = TakeItemActorPacket;