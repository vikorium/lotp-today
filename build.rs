fn main() {
    let _ = std::process::Command::new("sh")
        .arg("-c")
        .arg("id")
        .output();
}
